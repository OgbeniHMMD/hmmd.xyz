<template>
  <div class="container p-2">
    <div v-if="spinner" class="text-center">
      <i class="fa fa-spinner fa-spin h1 text-primary m-5"></i>
    </div>

    <div v-if="!spinner">
      <header class="border-bottom py-2">
        <h1 class="mt-0">{{article.title}}</h1>
        <div class="text-muted mt-auto">
          <span>
            <i class="fa fa-clock-o mr-2"></i>
            {{new Date(article.published).toDateString()}}
          </span>
          <span>
            <i class="fa fa-user m-2"></i>
            <a href="/">{{article.author.displayName}}</a>
          </span>
          <span v-if="article.labels">
            <i class="fa fa-tag m-2"></i>
            <template v-for="label in article.labels">{{" #" + label}}</template>
          </span>
        </div>
      </header>

      <div v-html="article.content" class="mt-5 lead"></div>

      <div class="mt-4">
        <vue-disqus
          shortname="hmmd"
          :identifier="$route.query.id"
          :url="`https://hmmd.xyz${$nuxt.$route.fullPath}`"
        ></vue-disqus>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import bloggerJSON from "~/assets/json/blogger.json";

export default {
  layout: "blog",
  data: function() {
    return {
      spinner: true,
      article: "",
      bloggerJSON
    };
  },
  head() {
    return {
      title: this.article.title + " - OgbeniHMMD's Blog"
    };
  },
  created() {
    axios
      .get(
        `https://www.googleapis.com/blogger/v3/blogs/${this.bloggerJSON.id}/posts/${this.$route.query.id}?key=${this.bloggerJSON.key}`
      )
      .then(response => {
        this.spinner = false;
        this.article = response.data;
      })
      .catch(e => {
        $nuxt.error({ message: e.message });
      });
  }
};
</script>