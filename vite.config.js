import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio-1",
  plugins: [react()],
  logLevel: "info", //Default "info"
  envDir: ".", // Default "."
  server: {
    port: 3000,
  },
  preview: {
    port: 8080,
  },
  clearScreen: false, // Default false
  envPrefix: "VITE_", // Default "VITE_"
  css: {
    devSourcemap: true,
  },
});
