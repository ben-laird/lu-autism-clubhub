import { PrismaClient } from "@prisma/client";
import { initTRPC } from "@trpc/server";
import type { FetchCreateContextFnOptions as Options } from "@trpc/server/adapters/fetch";
import SuperJSON from "superjson";

export const createContext = (options: Options) => {
  return {
    ...options,
    greetingPhrase: (name: string) => `Hello there, ${name}`,
    prisma: new PrismaClient(),
  };
};

export const t = initTRPC
  .context<typeof createContext>()
  .create({ transformer: SuperJSON });

export const { router, procedure } = t;
