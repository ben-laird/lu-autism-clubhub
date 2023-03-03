import { z } from "zod";
import { createContext as ctx, procedure, router } from "./initTRPC";

export const appRouter = router({
  greet: procedure
    .input((unfiltered) => {
      const schema = z.string();
      return schema.parse(unfiltered);
    })
    .query(({ input, ctx: { greetingPhrase } }) => greetingPhrase(input)),
});

export type AppRouter = typeof appRouter;

export const trpcServerSide = (astroSiphon: {
  request: Request;
  response: { headers: Headers };
}) => {
  const {
    request: req,
    response: { headers: resHeaders },
  } = astroSiphon;

  return appRouter.createCaller(ctx({ req, resHeaders }));
};
