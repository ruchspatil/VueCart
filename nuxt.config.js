export default {
  target: 'static', // For static site deployment
  css: ['~/assets/css/tailwind.css'], // Add Tailwind CSS
  buildModules: ['@nuxtjs/tailwindcss'], // Include Tailwind CSS module
  app: {
    head: {
      title: 'MyShop',
      meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  }
};
