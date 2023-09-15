// sw.js
// eslint-disable-next-line no-undef
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.5.3/workbox-sw.js');

// eslint-disable-next-line no-undef
workbox.precaching.precacheAndRoute([
  {
    url: '/',
    strategy: 'network-first',
  },
]);