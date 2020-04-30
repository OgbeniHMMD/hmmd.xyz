<template>
  <div class="container p-2">
    <div v-if="!article" class="text-center">
      <i class="fa fa-spinner h1 text-primary m-5"></i>
    </div>

    <template v-if="!loading">
      <header class="border-bottom py-2">
        <h1 class="mt-0">{{article.title}}</h1>
        <div class="text-muted mt-auto">
          <span>
            <i class="fa fa-clock-o mr-2"></i>
            {{new Date(article.published).toDateString()}}
          </span>
          <span>
            <i class="fa fa-user m-2"></i>
            {{article.author.displayName}}
          </span>
          <span v-if="article.labels">
            <i class="fa fa-tag m-2"></i>
            <template v-for="label in article.labels">{{" #" + label}}</template>
          </span>
        </div>
      </header>

      <article v-html="article.content" class="mt-5 lead"></article>
    </template>
  </div>
</template>


<script>
import axios from "axios";
import bloggerJSON from "~/assets/json/blogger.json";

export default {
  layout: "blog",
  data: function() {
    return {
      loading: true,
      article: "",
      bloggerJSON
    };
  },
  methods: {
    async fetchArticle() {
      axios
        .get(
          "https://www.googleapis.com/blogger/v3/blogs/" +
            this.bloggerJSON.id +
            "/posts/" +
            this.$route.query.id +
            "?key=" +
            this.bloggerJSON.key
        )
        .then(response => {
          // JSON responses are automatically parsed.
          this.article = response.data;
          this.loading = false;
        })
        .catch(e => {
          console.log(e);
          this.loading = false;
          $nuxt.error({ statusCode: 404 });
        });
    }
  },
  head() {
    return {
      title: this.article.title + " - Lagos State Polytechnic"
    };
  },
  created() {
    this.fetchArticle();
  }
};
</script>