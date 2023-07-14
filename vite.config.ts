/// <reference types="vitest" />
/// <reference types="vite/client" />

import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { configDefaults } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'istanbul',
      exclude: [
        ...configDefaults.coverage.exclude,
        'src/pages/index.tsx',
        'src/main.tsx',
        'src/assets/**',
        'src/styles/**',
        'src/hooks/**',
        'src/utils/**',
        '__mocks__/**',
      ],
      all: true,
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      assets: `${path.resolve(__dirname, './src/assets/')}`,
      components: `${path.resolve(__dirname, './src/components/')}`,
      pages: `${path.resolve(__dirname, './src/pages/')}`,
      styles: `${path.resolve(__dirname, './src/styles/')}`,
      utils: `${path.resolve(__dirname, './src/utils/')}`,
      hooks: `${path.resolve(__dirname, './src/hooks/')}`,
    },
  },
});
