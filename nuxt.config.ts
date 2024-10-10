// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  typescript: { strict: true },

  modules: [
    '@pinia/nuxt',
  ],

  css: ["@/app/index.scss"],

  imports: {
    dirs: [
      "shared/composables",
      "shared/utils",
    ],
  },

  components: [
    { path: '~/entities/', pathPrefix: false },
    { path: '~/features/', pathPrefix: false },
    { path: '~/shared/', pathPrefix: false },
    { path: '~/widgets/', pathPrefix: false }
  ]
})