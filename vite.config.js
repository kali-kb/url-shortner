import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import sass from 'sass';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()

  ],

  css: {
    preprocessorOptions: {
      sass: {
        implementation: sass,
      },
    },
  },
  
  server: {
    host: '127.0.0.1',
    port: 5173,
  },

})
