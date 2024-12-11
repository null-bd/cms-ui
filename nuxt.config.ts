export default defineNuxtConfig({
  modules: ['@nuxt/eslint'],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
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
