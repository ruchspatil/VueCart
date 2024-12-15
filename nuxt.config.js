export default {
 
  target: 'static',


  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Tailwind CSS module
  buildModules: [
    '@nuxtjs/tailwindcss', 
  ],

  // TailwindCSS configuration
  tailwindcss: {
   
  },

  
  generate: {
    fallback: true,
  },


  css: [],

 
  build: {},
};
