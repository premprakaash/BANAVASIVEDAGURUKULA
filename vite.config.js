import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// BASE_PATH is set by the GitHub Pages workflow (e.g. "/banavasivedagurukula/").
// Locally, and on hosts that serve from the domain root, it defaults to "/".
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
});
