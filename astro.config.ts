import solidJs from "@astrojs/solid-js";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const {
  DEV: inDev,
  VITE_TRPC_DEV_URL: devUrl,
  VITE_TRPC_PROD_URL: prodUrl,
} = import.meta.env;

// console.log(`dev: ${devUrl}, prod: ${prodUrl}`);

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [solidJs(), tailwind()],
  adapter: vercel(),
  site: inDev ? devUrl || "" : prodUrl || "",
});
