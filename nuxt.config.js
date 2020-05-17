export default {
  mode: "universal",
  head: {
    title: "OgbeniHMMD" || process.env.npm_package_name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Changa&display=swap"
      }
    ],
    script: [
      {
        crossorigin: "anonymous",
        src: "https://kit.fontawesome.com/57b5a4abc3.js"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "~/plugins/disqus", mode: "client" }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-165979019-1"
      }
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    [
      "@nuxtjs/google-adsense",
      {
        id: "ca-pub-1901202656329152"
      }
    ]
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  generate: {
    fallback: true // Use '404.html' instead of the default '200.html'
  }
};
