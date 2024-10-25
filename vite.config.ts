import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import favicon from 'vite-plugin-favicon';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    favicon({
      logo: resolve(__dirname, 'public', 'favicon.png'),
      inject: true,
    }),
  ],
});
