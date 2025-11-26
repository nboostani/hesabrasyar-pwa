import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  base: '/hesabrasyar-pwa/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icons/*.svg', 'icons/*.png', 'logo.svg'],
      manifest: {
        name: 'حسابرسیار - Hesabrasyar',
        short_name: 'حسابرسیار',
        description: 'سامانه مدیریت اسناد و اسکن موبایل',
        dir: 'rtl',
        lang: 'fa-IR',
        start_url: '/hesabrasyar-pwa/',
        scope: '/hesabrasyar-pwa/',
        display: 'standalone',
        orientation: 'portrait',
        theme_color: '#EF5530',
        background_color: '#FFFFFF',
        icons: [
          {
            src: '/hesabrasyar-pwa/icons/icon-192x192.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          },
          {
            src: '/hesabrasyar-pwa/icons/icon-512x512.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    })
  ]
});
