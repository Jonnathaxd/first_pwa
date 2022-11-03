import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // aqui eu configurei as informações do manifest
    VitePWA({
      // registerType: "autoUpdate",
      // injectRegister: "auto",

      // se eu quiser apontar para onde ficaria meu service work
      // eu desabilito as 3 linhas abaixo
      // strategies: "injectManifest",
      // srcDir: "src",
      // filename: "my_sw.js",
      manifest: {
        lang: "ptBR",
        name: "webcode",
        short_name: "webcode",
        theme_color: "#5ac8fb",
        background_color: "#5AC8FB",
        display: "standalone",
        scope: "/",
        start_url: "/",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
            // isso é importante por conta de um erro no pwa, pelo menos um ícone
            purpose: "any maskable",
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
    }),
  ],
});
