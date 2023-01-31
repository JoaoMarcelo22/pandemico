// This file configures the initialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn: SENTRY_DSN || 'https://7376f4b5e18348bfb1f10a362751df61@o4504595307757568.ingest.sentry.io/4504595350814720',
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1.0,

  replaysSessionSampleRate: 0.1,
  // ...
  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
  replaysOnErrorSampleRate: 1.0,

  integrations: [new Sentry.Replay(
  )],
});
