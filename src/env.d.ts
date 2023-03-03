/* eslint-disable spaced-comment */
/// <reference types="astro/client" />

enum Env {
  DATABASE_URL,
  TRPC_DEV_URL,
  TRPC_PROD_URL,
}

type EnvRecord<T extends string> = Readonly<Record<T, string>>;

type ImportMetaEnv = EnvRecord<keyof typeof Env>;
