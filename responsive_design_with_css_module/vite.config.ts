import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  css: {
    modules: {
      // Readable class names in dev, short hashes in production builds.
      generateScopedName: mode === 'production'
        ? '[hash:base64:6]'
        : '[name]__[local]__[hash:base64:4]',
    },
  },
}));
