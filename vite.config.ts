import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@features": fileURLToPath(new URL("./src/features", import.meta.url)),
      "@components": fileURLToPath(
        new URL("./src/components", import.meta.url),
      ),
      "@pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
      "@lib": fileURLToPath(new URL("./src/lib", import.meta.url)),
      "@router": fileURLToPath(new URL("./src/router", import.meta.url)),
      "@shared": fileURLToPath(new URL("./src/shared", import.meta.url)),
    },
  },
});
