import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import SuperJSON from "superjson";
import type { AppRouter } from "./server";

export const trpcClientSide = createTRPCProxyClient<AppRouter>({
  links: [httpBatchLink({ url: import.meta.env.SITE })],
  transformer: SuperJSON,
});
