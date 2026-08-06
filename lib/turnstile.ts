/**
 * Cloudflare Turnstile server-side verification.
 *
 * Failure policy is deliberate and split three ways:
 *
 *   'failed'       — Cloudflare gave a definitive negative verdict, or the
 *                    client sent no token at all while verification is armed.
 *                    That is an attack signal. Fail CLOSED.
 *
 *   'unreachable'  — we could not reach siteverify (outage, network blip).
 *                    That is our infrastructure's problem, not the visitor's.
 *                    Fail OPEN and log loudly; honeypot + rate limit still apply.
 *
 *   'unconfigured' — TURNSTILE_SECRET_KEY is absent. Fail OPEN and log loudly.
 *                    A mis-named or missing env var must degrade protection,
 *                    never silently swallow every inbound lead.
 *
 * Tokens are single-use and expire after ~300s, so the widget must be reset
 * after every submit attempt.
 */

const SITEVERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

export type TurnstileOutcome =
  | { status: 'ok' }
  | { status: 'unconfigured' }
  | { status: 'unreachable'; reason: string }
  | { status: 'failed'; codes: string[] };

interface SiteverifyResponse {
  success: boolean;
  'error-codes'?: string[];
}

export async function verifyTurnstile(
  token: string,
  remoteIp: string | null,
): Promise<TurnstileOutcome> {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) return { status: 'unconfigured' };
  if (!token) return { status: 'failed', codes: ['missing-input-response'] };

  const body = new URLSearchParams();
  body.set('secret', secret);
  body.set('response', token);
  // Cloudflare rejects a literal 'unknown' here, so only send a real address.
  if (remoteIp && remoteIp !== 'unknown') body.set('remoteip', remoteIp);

  let res: Response;
  try {
    res = await fetch(SITEVERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
      cache: 'no-store',
    });
  } catch (error) {
    return { status: 'unreachable', reason: String(error) };
  }

  if (!res.ok) return { status: 'unreachable', reason: `siteverify HTTP ${res.status}` };

  let data: SiteverifyResponse;
  try {
    data = (await res.json()) as SiteverifyResponse;
  } catch {
    return { status: 'unreachable', reason: 'siteverify returned unparseable JSON' };
  }

  if (data.success) return { status: 'ok' };
  return { status: 'failed', codes: data['error-codes'] ?? ['unknown'] };
}
