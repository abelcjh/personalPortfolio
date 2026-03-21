import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// For GitHub Pages at https://<user>.github.io/personalPortfolio/, set:
// base: "/personalPortfolio/"
export default defineConfig({
  plugins: [react()],
  base: "/",
});
