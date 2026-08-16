import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/portfolio/" : "/",
  plugins: [react(), tsconfigPaths(), tailwindcss()],
});
