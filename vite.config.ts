import { reactRouter } from '@react-router/dev/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRouter(), tsconfigPaths()],
  resolve: {
    dedupe: ['react', 'react-dom', 'react-router'],
  },
  build: {
    chunkSizeWarningLimit: 1024,
  },
  server: {
    port: 3000,
    host: true,
  },
  preview: {
    port: 3000,
  },
});
