import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

export default defineConfig({
  base: "/",
  plugins: [
    tanstackStart({
      server: {
        preset: "vercel",
      },
    }),
    tailwindcss(),
    react(),
    tsconfigPaths(),
  ],
});