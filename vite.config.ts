import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  ssr: {
    optimizeDeps: {
      include: ["@tanstack/react-start", "@tanstack/start-client-core"],
    },
  },
  tanstackStart: {
    server: { entry: "server" },
  },
});
