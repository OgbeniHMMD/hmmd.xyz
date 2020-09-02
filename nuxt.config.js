export default {
  mode: "universal",
  target: "static",

  head: {
    titleTemplate: "%s - " + "hmmd.xyz",
    title: "OgbeniHMMD",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"
      },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    script: [
      {
        src: "https://kit.fontawesome.com/57b5a4abc3.js",
        crossorigin: "anonymous"
      }
    ]
  },

  env: {
    app: {
      name: process.env.npm_package_name,
      slogan: process.env.npm_package_description
    }
  },

  loading: { color: "#fff" },
  buildModules: ["nuxt-purgecss"],

  modules: [
    "@nuxtjs/pwa",
    "@nuxtjs/axios",
    "@nuxt/content",
    "nuxt-webfontloader"
  ],

  webfontloader: {
    custom: {
      families: ["Righteous", "Quicksand"],
      urls: [
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
