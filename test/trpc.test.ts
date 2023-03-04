import type { inferProcedureInput } from "@trpc/server";
import { beforeEach, describe } from "vitest";
import { type AppRouter, trpcServerSide } from "~/trpc/server";

interface Ctx {
  tRPCTest: ReturnType<typeof trpcServerSide>;
}

describe<Ctx>("tRPC tests", (it) => {
  beforeEach<Ctx>((ctx) => {
    ctx.tRPCTest = trpcServerSide({
      request: new Request("https://example.com"),
      response: { headers: new Headers() },
    });
  });

  it("should greet correctly", async ({ expect, tRPCTest }) => {
    type Input = inferProcedureInput<AppRouter["greet"]>;
    const input: Input = "Jenny";

    const example = await tRPCTest.greet(input);

    expect(example).toMatch("Hello there, Jenny");
  });
});
