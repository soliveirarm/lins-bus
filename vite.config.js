import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { VitePWA } from "vite-plugin-pwa"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        short_name: "Itinerário Lins",
        name: "Itinerário - Transporte Público Lins",
        orientation: "portrait",
        icons: [
          {
            src: "/icons/bus-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/icons/bus-256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "/icons/bus-128.png",
            sizes: "128x128",
            type: "image/png",
          },
        ],
        start_url: "/?source=pwa",
        background_color: "#50b96d",
        display: "fullscreen",
        scope: "/",
        theme_color: "#50b96d",
        description:
          "Lista de horários de todas as linhas de ônibus em Lins, São Paulo.",
      },
    }),
  ],
})
