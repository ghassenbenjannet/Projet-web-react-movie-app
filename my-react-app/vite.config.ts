import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default {
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  server:{
    host:true,
    port: 80,
  },
};
