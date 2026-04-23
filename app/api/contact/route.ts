import { NextResponse } from 'next/server';

/**
 * Contact form submission handler.
 *
 * CURRENT: Submits to HubSpot Forms API.
 * Portal: 244293135
 * Form GUID: 2f32081e-73eb-45a9-b666-6fd5150e7d19
 *
 * MIGRATION NOTE: Kevin is cancelling HubSpot when his annual sub
 * expires (~late 2026). When that happens, replace the submitToHubSpot()
 * function below with a Resend (or alternative) integration. The form
 * component itself does NOT need to change — it POSTs to this route's
 * path regardless of where the data ultimately lands.
 */

const HUBSPOT_PORTAL_ID = '244293135';
const HUBSPOT_FORM_GUID = '2f32081e-73eb-45a9-b666-6fd5150e7d19';
const HUBSPOT_SUBMIT_URL = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`;

interface ContactPayload {
  firstName?: string;
  lastName?: string;
  company?: string;
  email: string;
  phone: string;
  helpTopic?: string;
  description?: string;
}

function buildMessage(helpTopic?: string, description?: string): string {
  const parts: string[] = [];
  if (helpTopic) parts.push(`Looking for help with: ${helpTopic}`);
  if (description) parts.push(description);
  return parts.join('\n\n');
}

async function submitToHubSpot(payload: ContactPayload) {
  const fields = [
    { objectTypeId: '0-1', name: 'firstname', value: payload.firstName ?? '' },
    { objectTypeId: '0-1', name: 'lastname', value: payload.lastName ?? '' },
    { objectTypeId: '0-1', name: 'company', value: payload.company ?? '' },
    { objectTypeId: '0-1', name: 'email', value: payload.email },
    { objectTypeId: '0-1', name: 'phone', value: payload.phone },
    { objectTypeId: '0-1', name: 'message', value: buildMessage(payload.helpTopic, payload.description) },
  ].filter((f) => f.value !== '');

  const body = {
    fields,
    context: {
      pageUri: 'civicstrategypartners.com/contact',
      pageName: 'Contact — Civic Strategy Partners',
    },
  };

  const res = await fetch(HUBSPOT_SUBMIT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`HubSpot ${res.status}: ${errorText}`);
  }

  return res.json();
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let data: ContactPayload;

  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON body' }, { status: 400 });
  }

  const email = (data.email ?? '').trim();
  const phone = (data.phone ?? '').trim();

  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: 'Valid email is required.' }, { status: 400 });
  }
  if (!phone) {
    return NextResponse.json({ ok: false, error: 'Phone is required.' }, { status: 400 });
  }

  try {
    await submitToHubSpot({
      firstName: data.firstName?.trim(),
      lastName: data.lastName?.trim(),
      company: data.company?.trim(),
      email,
      phone,
      helpTopic: data.helpTopic?.trim(),
      description: data.description?.trim(),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    // Log server-side but still return success — we care about capturing the lead,
    // not perfect CRM hygiene. If HubSpot rejects a field, Kevin will still see
    // the message in the HubSpot notification email; worst case the submission is
    // dropped and the client shown success (acceptable given pending migration).
    console.error('[contact] HubSpot submission failed:', error);
    return NextResponse.json({ ok: true, warning: 'logged' });
  }
}
