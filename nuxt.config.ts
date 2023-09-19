// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: '%s %separator %siteName',
      htmlAttrs: {
        lang: 'pt-BR'
      }
    }
  },
  srcDir: 'src/',
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    '@nuxt/image',
    'nuxt-icon',
    '@vueuse/motion/nuxt',
    '@nuxtseo/module',
    '@nuxt/content',
    'nuxt-og-image'
  ],
  site: {
    name: 'Agência Nuxa',
    description: `Na Agência Nuxa, estamos apaixonados por transformar ideias em realidade.
    Somos uma equipe de especialistas em desenvolvimento web e design, prontos para criar soluções digitais que se destacam.
    Trabalhamos incansavelmente para tornar a web um lugar mais bonito e funcional.`,
    identity: {
      type: 'Organization'
    },
    defaultLocale: 'pt-BR',
  },
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
    densities: [1, 2, 3]
  },
  build: {
    templates: [
      {
        src: 'src/templates/app.html'
      }
    ]
  },
  eslint: {
    emitWarning: false
  },
  css: ['@/assets/styles.scss'],
  routeRules: {
    '/': { isr: true },
    '/beneficios/**': { isr: true }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/mixins.scss";'
        }
      }
    }
  },
  runtimeConfig: {
    public: {
      youtube: 'https://www.youtube.com/LuisVazTrader',
      instagram: 'https://instagram.com/oluisvaz',
      facebook: 'https://www.facebook.com/profile.php?id=100093435019657&mibextid=LQQJ4d'
    }
  },
  experimental: { componentIslands: true },
  devtools: { enabled: true },
  nitro: {
    preset: 'vercel',
    experimental: { openAPI: true }
  },
  extends: [
    'github:TutorFx/sheets-api-nuxt-layer' // Extend from a git repository
  ]
})
