import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Export Vite config
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // "@" points to src/
    },
  },

  build: {
    outDir: "dist",      // Render expects "dist" as output
    emptyOutDir: true,   // Clean old builds before building
  },

  server: {
    port: 5173,          // Optional: default Vite dev port
  },
});
