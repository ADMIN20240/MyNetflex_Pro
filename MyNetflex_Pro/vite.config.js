import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/MyNetflex_pro/",
});

// vite.config.js
// import { defineConfig } from 'vite';
// export default defineConfig({
//   server: {
//     port: 3000,
//     title: "Netflix Title", // Change the title here
//   },
// });