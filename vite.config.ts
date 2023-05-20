/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
// <reference types="vitest/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    coverage: {
      provider: 'c8',
      all: true,
      src: ['src'],
      exclude: [
        'src/components/cardForm/helpers**',
        '*.d.ts',
        'src/components/layout',
        'src/services',
        'src/pages/interfaces',
        'src/components/cardForm/CardFormInterface.ts',
        'src/main.tsx',
        'src/App.tsx',
        'src/components/itemCard/ItemPropInterface.ts',
      ],
    },
  },
});
