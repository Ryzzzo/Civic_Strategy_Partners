import { NextResponse } from 'next/server';
import { z } from 'zod';
import { clientIpFrom, rateLimit } from '@/lib/rate-limit';
import { verifyTurnstile } from '@/lib/turnstile';

/**
 * Contact form submission handler.
 *
 * Submits to the HubSpot Forms API (unauthenticated endpoint — no API key).
 * Portal: 244293135
 * Form GUID: 2f32081e-73eb-45a9-b666-6fd5150e7d19
 *
 * Three gates run before anything reaches HubSpot, cheapest first:
 *   1. Zod schema        → 400
 *   2. Honeypot          → 400
 *   3. Rate limit        → 429   (5 per IP per hour)
 *   4. Turnstile verify  → 429
 *
 * MIGRATION NOTE: Kevin's HubSpot subscription is cancelled. When the portal
 * goes dark, replace submitToHubSpot() with a Resend (or alternative)
 * integration. Nothing else changes — the form POSTs to this path regardless
 * of where the data ultimately lands.
 */

export const runtime = 'nodejs';

const HUBSPOT_PORTAL_ID = '244293135';
const HUBSPOT_FORM_GUID = '2f32081e-73eb-45a9-b666-6fd5150e7d19';
const HUBSPOT_SUBMIT_URL = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`;

const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour

const ContactSchema = z.object({
  firstName: z.string().trim().max(100).default(''),
  lastName: z.string().trim().max(100).default(''),
  company: z.string().trim().max(200).default(''),
  email: z
    .string()
    .trim()
    .min(1, 'Email is required.')
    .max(254)
    .email('Enter a valid email address.'),
  phone: z.string().trim().min(1, 'Phone number is required.').max(50),
  helpTopic: z.string().trim().max(120).default(''),
  description: z.string().trim().max(5000).default(''),
  /** Honeypot. Real people never see this field, so any value means a bot. */
  website: z.string().max(200).default(''),
  turnstileToken: z.string().max(4096).default(''),
});

type ContactInput = z.infer<typeof ContactSchema>;

function buildMessage(helpTopic: string, description: string): string {
  const parts: string[] = [];
  if (helpTopic) parts.push(`Looking for help with: ${helpTopic}`);
  if (description) parts.push(description);
  return parts.join('\n\n');
}

async function submitToHubSpot(payload: ContactInput, ip: string): Promise<void> {
  const fields = [
    { objectTypeId: '0-1', name: 'firstname', value: payload.firstName },
    { objectTypeId: '0-1', name: 'lastname', value: payload.lastName },
    { objectTypeId: '0-1', name: 'company', value: payload.company },
    { objectTypeId: '0-1', name: 'email', value: payload.email },
    { objectTypeId: '0-1', name: 'phone', value: payload.phone },
    {
      objectTypeId: '0-1',
      name: 'message',
      value: buildMessage(payload.helpTopic, payload.description),
    },
  ].filter((f) => f.value !== '');

  const body = {
    fields,
    context: {
      pageUri: 'civicstrategypartners.com/contact',
      pageName: 'Contact — Civic Strategy Partners',
      ...(ip && ip !== 'unknown' ? { ipAddress: ip } : {}),
    },
  };

  const res = await fetch(HUBSPOT_SUBMIT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    cache: 'no-store',
  });

  if (!res.ok) {
    const errorText = await res.text().catch(() => '<unreadable>');
    throw new Error(`HubSpot ${res.status}: ${errorText}`);
  }
}

export async function POST(request: Request) {
  let raw: Record<string, unknown>;

  try {
    raw = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request body.' }, { status: 400 });
  }

  // The widget's native field name is cf-turnstile-response; accept either key.
  const altToken = raw['cf-turnstile-response'];
  if (typeof altToken === 'string' && !raw.turnstileToken) {
    raw.turnstileToken = altToken;
  }

  const parsed = ContactSchema.safeParse(raw);
  if (!parsed.success) {
    const first = parsed.error.errors[0];
    return NextResponse.json(
      { ok: false, error: first?.message ?? 'Please check the form and try again.' },
      { status: 400 },
    );
  }

  const data = parsed.data;

  // ── Gate 1: honeypot ──────────────────────────────────────────────────────
  if (data.website.trim() !== '') {
    console.warn('[contact] rejected: honeypot filled');
    return NextResponse.json(
      { ok: false, error: 'This submission could not be processed.' },
      { status: 400 },
    );
  }

  const ip = clientIpFrom(request.headers);

  // ── Gate 2: rate limit ────────────────────────────────────────────────────
  const limit = rateLimit(`contact:${ip}`, RATE_LIMIT, RATE_WINDOW_MS);
  if (!limit.allowed) {
    console.warn(`[contact] rejected: rate limit for ${ip}`);
    return NextResponse.json(
      {
        ok: false,
        error: 'Too many submissions from this connection. Please try again later, or email us directly.',
      },
      {
        status: 429,
        headers: {
          'Retry-After': String(limit.retryAfterSeconds),
          'X-RateLimit-Limit': String(RATE_LIMIT),
          'X-RateLimit-Remaining': '0',
        },
      },
    );
  }

  // ── Gate 3: Turnstile ─────────────────────────────────────────────────────
  const outcome = await verifyTurnstile(data.turnstileToken, ip);

  if (outcome.status === 'failed') {
    console.warn(`[contact] rejected: turnstile failed [${outcome.codes.join(', ')}]`);
    return NextResponse.json(
      { ok: false, error: 'Verification failed. Please reload the page and try again.' },
      {
        status: 429,
        headers: {
          'Retry-After': '30',
          'X-RateLimit-Limit': String(RATE_LIMIT),
          'X-RateLimit-Remaining': String(limit.remaining),
        },
      },
    );
  }

  if (outcome.status === 'unconfigured') {
    console.error(
      '[contact] TURNSTILE_SECRET_KEY is not set — bot verification is DISABLED. ' +
        'Submissions are protected only by the honeypot and rate limit. Set the env var.',
    );
  } else if (outcome.status === 'unreachable') {
    console.error(
      `[contact] Turnstile siteverify unreachable (${outcome.reason}) — allowing submission through ` +
        'so a Cloudflare outage does not drop a real lead.',
    );
  }

  // ── Deliver ───────────────────────────────────────────────────────────────
  try {
    await submitToHubSpot(data, ip);
  } catch (error) {
    // Previously this swallowed the error and returned success. That was wrong:
    // if the POST fails, HubSpot never receives the lead and never sends Kevin a
    // notification, so "success" meant a silently lost enquiry. Surfacing the
    // failure lets the UI show the direct email fallback, which still reaches him.
    console.error('[contact] HubSpot submission failed:', error);
    return NextResponse.json(
      {
        ok: false,
        error: 'We could not deliver your message. Please email info@civicstrategypartners.com directly.',
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
