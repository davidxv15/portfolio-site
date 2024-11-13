import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const config = defineConfig({
  plugins: [react()],
  server: {
    open: true, // auto open browser
  },
});

export default config;
