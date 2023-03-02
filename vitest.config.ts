import { getViteConfig } from "astro/config";
import { resolve } from "path";

export default getViteConfig({
  resolve: {
    alias: {
      "@tRPC": resolve(__dirname, "./src/trpc"),
      "~": resolve(__dirname, "./src"),
    },
  },
  test: {
    includeSource: ["src/**/*.{js,ts}"],
    coverage: { reporter: ["html-spa", "text"] },
  },
  define: {
    "import.meta.vitest": "undefined",
  },
});
