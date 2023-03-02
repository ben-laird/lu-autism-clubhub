import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import type { APIRoute } from "astro";
import { appRouter as router, createContext } from "@tRPC/server";

export const all: APIRoute = async ({ request: req }) => {
  return fetchRequestHandler({
    req,
    endpoint: "/api/trpc",
    router,
    createContext,
  });
};
