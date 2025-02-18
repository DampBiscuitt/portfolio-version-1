import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio-version-1/",
  css: {
    mofules: {
      localsConvention: 'camelCase'
    },
  },
});
