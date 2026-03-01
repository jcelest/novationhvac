import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  appType: 'spa',
  build: {
    rollupOptions: {
      input: [
      'index.html',
      'orlando.html',
      'kissimmee.html',
      'poinciana.html',
      'osceola-county.html',
      'orange-county.html',
      'polk-county.html',
      'winter-haven.html',
      'auburndale.html',
      'haines-city.html',
      'dr-phillips.html',
      'windermere.html',
      'altamonte-springs.html',
    ],
    },
  },
  server: {
    port: 5173,
    strictPort: false,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
});
