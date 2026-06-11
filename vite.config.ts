import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";

export default defineConfig({
  base: "/",
  plugins: [
    tanstackStart(),
    // Disable Nitro's index.html renderer so TanStack Start's SSR handler serves all routes.
    // Use vercel preset for proper Vercel deployment.
    nitro({ renderer: false, preset: "vercel" }),
    tailwindcss(),
    react(),
    tsconfigPaths(),
  ],
});
