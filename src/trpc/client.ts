import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import SuperJSON from "superjson";
import type { AppRouter } from "./server";

const {
  DEV: inDev,
  TRPC_DEV_URL: devUrl,
  TRPC_PROD_URL: prodUrl,
} = import.meta.env;

const tRPC = createTRPCProxyClient<AppRouter>({
  links: [httpBatchLink({ url: inDev ? devUrl : prodUrl })],
  transformer: SuperJSON,
});

export default tRPC;
