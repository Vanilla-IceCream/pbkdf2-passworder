import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/pbkdf2-passworder.ts'),
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['node:crypto'],
    },
  },
  plugins: [dts()],
});
