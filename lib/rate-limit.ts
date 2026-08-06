/**
 * Minimal in-memory sliding-window rate limiter.
 *
 * Scope caveat, stated plainly: this state lives in one serverless instance's
 * memory. Vercel reuses warm instances across requests, so a single bot
 * hammering from one IP will usually land on the same instance and get capped.
 * It is NOT a global guarantee — a distributed flood, or traffic spread across
 * cold starts and regions, can slip past it. This is a speed bump behind
 * Turnstile, not the primary gate. If the spam ever justifies a hard cap,
 * swap this for Upstash Redis behind the same function signature.
 */

interface Bucket {
  hits: number[];
}

const buckets = new Map<string, Bucket>();

/** Sweep threshold — keeps the map from growing without bound under a flood. */
const MAX_KEYS = 10_000;

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  /** Seconds until the oldest hit ages out of the window. 0 when allowed. */
  retryAfterSeconds: number;
}

export function rateLimit(key: string, limit: number, windowMs: number): RateLimitResult {
  const now = Date.now();
  const cutoff = now - windowMs;

  const bucket = buckets.get(key) ?? { hits: [] };
  const hits = bucket.hits.filter((t) => t > cutoff);

  if (hits.length >= limit) {
    const oldest = hits[0] ?? now;
    bucket.hits = hits;
    buckets.set(key, bucket);
    return {
      allowed: false,
      remaining: 0,
      retryAfterSeconds: Math.max(1, Math.ceil((oldest + windowMs - now) / 1000)),
    };
  }

  hits.push(now);
  bucket.hits = hits;
  buckets.set(key, bucket);

  if (buckets.size > MAX_KEYS) sweep(cutoff);

  return {
    allowed: true,
    remaining: Math.max(0, limit - hits.length),
    retryAfterSeconds: 0,
  };
}

/** Drop buckets whose hits have all aged out. Array.from keeps this es5-safe. */
function sweep(cutoff: number): void {
  Array.from(buckets.keys()).forEach((key) => {
    const bucket = buckets.get(key);
    if (!bucket) return;
    const live = bucket.hits.filter((t) => t > cutoff);
    if (live.length === 0) buckets.delete(key);
    else bucket.hits = live;
  });
}

/**
 * Best-effort client IP. Vercel always sets x-forwarded-for; the first entry is
 * the originating client. Falls back to a shared bucket so a missing header
 * degrades to a global cap rather than to no cap at all.
 */
export function clientIpFrom(headers: Headers): string {
  const forwarded = headers.get('x-forwarded-for');
  if (forwarded) {
    const first = forwarded.split(',')[0]?.trim();
    if (first) return first;
  }
  return headers.get('x-real-ip')?.trim() || 'unknown';
}
