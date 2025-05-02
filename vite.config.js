import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/Dojohub/" // Ensure this matches your GitHub repository name
});
