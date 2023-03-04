/* eslint-disable spaced-comment */
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly DATABASE_URL: string | undefined;
  readonly VITE_TRPC_DEV_URL: string | undefined;
  readonly VITE_TRPC_PROD_URL: string | undefined;
  readonly SITE: string
  readonly PUBLIC_VERCEL_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
