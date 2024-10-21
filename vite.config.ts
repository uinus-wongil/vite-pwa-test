import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: "testApp",
        short_name: "testApp",
        start_url: "/",
        display: "standalone",
        background_color: "#FFFFFF",
        theme_color: "#FFFFFF",
        description: "PWA test",
        icons: [
          {
            src: "/favicon.ico",
            sizes: "64x64 32x32 24x24 16x16",
            type: "image/x-icon"
          },
          {
            src: "/android-chrome-192x192.png",
            type: "image/png",
            sizes: "192x192"
          },
          {
            src: "/android-chrome-512x512.png",
            type: "image/png",
            sizes: "512x512"
          },
          {
            src: "/android-chrome-512x512.png",
            type: "image/png",
            sizes: "512x512",
            purpose: "any maskable"
          }
        ]
      }
    })
  ],
})
