export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
  ],
  devtools: { enabled: true },
  css: ['~/assets/sass/main.sass'],
  runtimeConfig: {
    apiSecret: '123',
    public: {
      apiBase: '/api',
    },
  },

  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-11-01',
  eslint: {
    config: {
      stylistic: true,
    },
  },
  image: {
    dir: 'assets/img',
    quality: 80,
    domains: ['https://cdn.dummyjson.com'], // For testing purposes only
  },
})

// FROM ONLINE DOCS: https://nuxt.com/docs/api/configuration/nuxt-config
//
// To re-enable _all_ Nuxt v3 behavior, set the following options:
// srcDir: '.',
// dir: {
//   app: 'app'
// },
// experimental: {
//   scanPageMeta: 'after-resolve',
//   sharedPrerenderData: false,
//   compileTemplate: true,
//   resetAsyncDataToUndefined: true,
//   templateUtils: true,
//   relativeWatchPaths: true,
//   normalizeComponentNames: false,
//   spaLoadingTemplateLocation: 'within',
//   defaults: {
//     useAsyncData: {
//       deep: true
//     }
//   }
// },
// unhead: {
//   renderSSRHeadOptions: {
//     omitLineBreaks: false
//   }
// }
