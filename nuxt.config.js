export default {
  target: 'public',
  css: [],  
  buildModules: [],  
  head: {
    title: 'MyShop',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  tailwindcss: {
  
    jit: true,  
  }
};
