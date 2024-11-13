import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const config = defineConfig({
  base: '/', // Sets the base path for all built assets
  server: {
    port: 5173,
    open: true, //auto open browser
    proxy: {
      "/api": process.env.VITE_API_URL || "http://localhost:3001",
    },
  },
  plugins: [react()],
});

export default config;
