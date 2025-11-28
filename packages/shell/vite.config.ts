import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "shell",
      filename: "remoteEntry.js",
      remotes: {
        user_card: "http://localhost:5001/assets/remoteEntry.js",
        content_bar: "http://localhost:5002/assets/remoteEntry.js",
      },
      exposes: {
        "./dashboard-store": "./src/store/dashboard-store.ts",
      },
      shared: ["react", "react-dom", "zustand"],
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5000,
    strictPort: true,
    cors: true,
  },
});
