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

  loading: { color: "#fff" },

  css: [],

  plugins: [{ src: "~/plugins/disqus", mode: "client" }],

  buildModules: ["@nuxtjs/google-analytics"],

  modules: [
    "@nuxtjs/pwa",
    "@nuxtjs/axios",
    "@nuxt/content",
    "@nuxtjs/google-adsense",
    "nuxt-webfontloader"
  ],

  googleAdsense: {
    id: "ca-pub-1901202656329152"
  },

  googleAnalytics: {
    id: "UA-165979019-1"
  },

  webfontloader: {
    custom: {
      families: ["Changa", "Righteous", "Quicksand"],
      urls: [
        "https://fonts.googleapis.com/css?family=Changa&display=swap",
        "https://fonts.googleapis.com/css?family=Righteous&display=swap",
        "https://fonts.googleapis.com/css?family=Quicksand&display=swap"
      ]
    }
  },

  build: {
    extend(config, ctx) {}
  },

  generate: {
    fallback: true // Use '404.html'
  }
};
