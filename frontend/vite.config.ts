import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  /*css: {
    preprocessorOptions: {
      scss: {
      }
    }
  },*/
  resolve: {
		alias: {
			"@components": path.resolve(__dirname, "./src/components/*"),
			"@pages": path.resolve(__dirname, "./src/pages/*"),
		},
	},
})