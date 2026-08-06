'use client';

import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

/**
 * Cloudflare Turnstile widget, explicit-render mode.
 *
 * Hand-rolled rather than pulled from a wrapper package: this repo is on
 * Next 13.5 / React 18 with a well-settled lockfile, and the whole integration
 * is ~90 lines. A dependency would buy nothing and risk churn.
 *
 * Tokens are single-use — call reset() through the ref after every submit
 * attempt or the next one will be rejected as already-redeemed.
 */

type TurnstileTheme = 'light' | 'dark' | 'auto';

interface TurnstileApi {
  render: (el: HTMLElement, opts: Record<string, unknown>) => string;
  reset: (widgetId?: string) => void;
  remove: (widgetId?: string) => void;
}

declare global {
  interface Window {
    turnstile?: TurnstileApi;
    __cspTurnstileReady?: () => void;
  }
}

/** Shared across mounts — the API script must only ever be injected once. */
let readyPromise: Promise<void> | null = null;

function loadTurnstile(): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve();
  if (window.turnstile) return Promise.resolve();
  if (readyPromise) return readyPromise;

  readyPromise = new Promise<void>((resolve, reject) => {
    window.__cspTurnstileReady = () => resolve();
    const script = document.createElement('script');
    script.src =
      'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=__cspTurnstileReady';
    script.async = true;
    script.defer = true;
    script.onerror = () => {
      readyPromise = null; // allow a later mount to retry
      reject(new Error('Turnstile script failed to load'));
    };
    document.head.appendChild(script);
  });

  return readyPromise;
}

export interface TurnstileHandle {
  reset: () => void;
}

interface TurnstileWidgetProps {
  siteKey: string;
  theme?: TurnstileTheme;
  onVerify: (token: string) => void;
  onExpire?: () => void;
  onError?: () => void;
  className?: string;
}

const TurnstileWidget = forwardRef<TurnstileHandle, TurnstileWidgetProps>(
  function TurnstileWidget(
    { siteKey, theme = 'dark', onVerify, onExpire, onError, className },
    ref,
  ) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const widgetIdRef = useRef<string | null>(null);

    // Hold callbacks in refs so a parent re-render never tears down the widget.
    const onVerifyRef = useRef(onVerify);
    const onExpireRef = useRef(onExpire);
    const onErrorRef = useRef(onError);

    // Declared first so the refs are current before the render effect below runs.
    useEffect(() => {
      onVerifyRef.current = onVerify;
      onExpireRef.current = onExpire;
      onErrorRef.current = onError;
    });

    useImperativeHandle(
      ref,
      () => ({
        reset: () => {
          if (widgetIdRef.current && window.turnstile) {
            window.turnstile.reset(widgetIdRef.current);
          }
        },
      }),
      [],
    );

    useEffect(() => {
      let cancelled = false;

      loadTurnstile()
        .then(() => {
          if (cancelled || widgetIdRef.current) return;
          if (!containerRef.current || !window.turnstile) return;

          widgetIdRef.current = window.turnstile.render(containerRef.current, {
            sitekey: siteKey,
            theme,
            callback: (token: string) => onVerifyRef.current(token),
            'expired-callback': () => onExpireRef.current?.(),
            'error-callback': () => onErrorRef.current?.(),
          });
        })
        .catch(() => {
          if (!cancelled) onErrorRef.current?.();
        });

      return () => {
        cancelled = true;
        const id = widgetIdRef.current;
        widgetIdRef.current = null;
        if (id && window.turnstile) {
          try {
            window.turnstile.remove(id);
          } catch {
            /* already torn down */
          }
        }
      };
    }, [siteKey, theme]);

    return <div ref={containerRef} className={className} />;
  },
);

export default TurnstileWidget;
