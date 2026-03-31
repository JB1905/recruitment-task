Object.defineProperty(globalThis, 'import', {
  value: {
    meta: {
      env: {
        VITE_KITTENS_BASE_URL: 'https://placekittens.com',
        DEV: false,
      },
    },
  },
  writable: true,
});
