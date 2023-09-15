import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import { manifestForPlugIn } from "./manifest";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(
    // manifestForPlugIn
    // {
    // manifest: {
    //   "name": "Bhanu Portfolio",
    //   "short_name": "Portfolio",
    //   "start_url": "./public/index.html",
    //   "display": "standalone",
    //   "background_color": "#ffe9d2",
    //   "theme_color": "#ffe9d2",
    //   "orientation": "portrait-primary",
    //   "icons": [
    //     {
    //       "src": "./public/icon.png",
    //       "type": "image/png",
    //       "sizes": "144x144"
    //     }
    //   ]
    // },
    // workbox: {
    //   runtimeCaching: [{
    //     urlPattern: ({ url }) => {
    //       return url.pathname.startsWith("/api")
    //     },
    //     handler: "CacheFirst",
    //     options: {
    //       cacheName: "api-cache",
    //       cacheableResponse: {
    //         statuses: [0, 200]
    //       }
    //     }
    //   },
    //   ]
    // }
    // }
  )],
})

// vite.config.js
// import { defineConfig } from 'vite';
// import { PWAPlugin } from 'vite-plugin-pwa';

// export default defineConfig({
//   plugins: [
//     PWAPlugin({
//       workboxOptions: {
//         swSrc: './sw.js',
//       },
//     }),
//   ],
// });