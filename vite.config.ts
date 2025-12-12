import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client"), // <- points to client folder
    },
  },
  base: "/portfolio_my_uiuxdesigner/", // your GitHub repo name
});
