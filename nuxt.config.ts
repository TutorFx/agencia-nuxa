// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Agência Nuxa',
      meta: [
        {
          name: 'description', content: `A Nuxa é uma agência digital que ajuda pequenos e médios negócios 
          a se iniciarem no mundo digital. Com soluções personalizadas, ajudamos sua empresa a crescer 
          e se destacar na internet.`
        }
      ],
    }
  },
  srcDir: 'src/',
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-icon',
  ],
  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536
    },
    format: ['webp'],
    densities: [1, 2, 3],
  },
  build: {
    templates: [
      {
        src: 'src/templates/app.html',
      }
    ],
    transpile: ['vue-toastification'],
  },
  css: ['@/assets/styles.scss'],
  routeRules: {
    '/': { static: true },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/mixins.scss";',
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      youtube: 'https://www.youtube.com/LuisVazTrader',
      instagram: 'https://instagram.com/oluisvaz',
      facebook: 'https://www.facebook.com/profile.php?id=100093435019657&mibextid=LQQJ4d'
    },
  },
  devtools: { enabled: true }
})
