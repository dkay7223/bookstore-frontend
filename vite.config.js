import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/bookstore-frontend/",
  server:{
    host:true,
    port:80
  }
});
