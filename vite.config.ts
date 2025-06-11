import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()], // Enable React support
    base: "/peluso-photos/", // Set the base path for GitHub Pages deployment
});
