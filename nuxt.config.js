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
    ]
  },
  env: {
    app: {
      name: process.env.npm_package_name,
      slogan: process.env.npm_package_description
    },
    blog: {
      name: "OgbeniHMMD's Blog",
      slogan: process.env.npm_package_description
    },
    links: {
      twitter: "//twitter.com/OgbeniHMMD",
      github: "//github.com.com/OgbeniHMMD"
    }
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
    "@nuxt/content",
    "nuxt-webfontloader",
    [
      "@nuxtjs/google-adsense",
      {
        id: "ca-pub-1901202656329152"
      }
    ]
  ],
  webfontloader: {
    google: {
      families: ["Changa&display=swap", "Righteous"]
    }
  },
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
