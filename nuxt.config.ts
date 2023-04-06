// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    strict: true
  },
  // @ts-ignore
  snackbar: {
    top: true,
    center: true,
    duration: 5000
  },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', 'nuxt-snackbar', 'nuxt-icon']
})
