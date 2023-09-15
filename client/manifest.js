export const manifestForPlugIn = {
  registerType: 'prompt',
  includeAssests: ['icon.png'],
  manifest: {
    name: "React-vite-app",
    short_name: "react-vite-app",
    description: "I am a simple vite app",
    icons: [{
      src: './public/icon.png',
      sizes: '192x192',
      type: 'image/png',
      purpose: 'favicon'
    },
    ],
    theme_color: '#171717',
    background_color: '#f0e7db',
    display: "standalone",
    scope: '/',
    start_url: "/",
    orientation: 'portrait'
  }
}