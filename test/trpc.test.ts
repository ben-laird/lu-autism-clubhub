import type { inferProcedureInput } from "@trpc/server";
import { beforeEach, describe } from "vitest";
import { AppRouter, appRouter, createContext } from "@tRPC/server";

interface Ctx {
  tRPCcaller: ReturnType<AppRouter["createCaller"]>;
}

describe<Ctx>("tRPC tests", (it) => {
  beforeEach<Ctx>((ctx) => {
    ctx.tRPCcaller = appRouter.createCaller(
      createContext({
        req: new Request("https://example.com"),
        resHeaders: new Headers(),
      })
    );
  });

  it("should greet correctly", async ({ expect, tRPCcaller }) => {
    type Input = inferProcedureInput<AppRouter["greet"]>;
    const input: Input = "Jenny";

    const example = await tRPCcaller.greet(input);

    expect(example).toMatch("Hello there, Jenny");
  });
});
