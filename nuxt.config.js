export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "treasury",
    htmlAttrs: {
      lang: "en",
    },


    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],

  },


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/scss/style.scss"],


// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/axios" },
    { src: "~/plugins/swiper", mode: "client" },
    { src: "~/plugins/vue_google_map", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    '@nuxtjs/axios',
  ],
  axios: {
    //baseURL: "http://10.20.120.162:8000/api",

        baseURL: "https://api.treasure.alv.az/api",

  },
  server: {
    host: "0.0.0.0",
    port: 3040,
  },

  router: {
    // middleware: 'trailingSlashRedirect',
     trailingSlash: false,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
