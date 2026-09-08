import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const nitroPreset = process.env["NETLIFY"]
  ? "netlify"
  : process.env["VERCEL"]
    ? "vercel"
    : undefined;

export default defineConfig({
  nitro: nitroPreset ? { preset: nitroPreset } : true,
  tanstackStart: {
    server: { entry: "server" },
  },
});
