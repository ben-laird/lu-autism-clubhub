import { initTRPC } from "@trpc/server";
import type { FetchCreateContextFnOptions as Options } from "@trpc/server/adapters/fetch";
import SuperJSON from "superjson";
import { z } from "zod";

export const createContext = (options: Options) => {
  return {
    ...options,
    greetingPhrase: (name: string) => `Hello there, ${name}`,
  };
};

export const t = initTRPC
  .context<typeof createContext>()
  .create({ transformer: SuperJSON });

export const { router, procedure } = t;

export const appRouter = router({
  greet: procedure
    .input((unfiltered) => {
      const schema = z.string();
      return schema.parse(unfiltered);
    })
    .query(({ input, ctx: { greetingPhrase } }) => greetingPhrase(input)),
});

export type AppRouter = typeof appRouter;
