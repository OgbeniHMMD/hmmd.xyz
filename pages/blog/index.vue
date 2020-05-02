<template>
  <div class="container p-2">
    <div v-if="spinner" class="text-center">
      <i class="fa fa-spinner fa-spin h1 text-primary m-5"></i>
    </div>

    <div v-if="!spinner">
      <article
        :key="article.id"
        class="position-relative border-bottom border-primary text-center py-5"
        v-for="article in posts.items"
      >
        <a :href="'/blog/read/?id=' + article.id" class="stretched-link">
          <h1 class="mt-0 mb-2">{{article.title}}</h1>
        </a>

        <div class="text-muted text-small">
          <i class="fa fa-clock-o mr-2"></i>
          <span>
            {{
            new Date(article.published)
            .toDateString()
            }}
          </span>
          <span v-if="article.labels">
            <i class="fa fa-tag mx-2"></i>
            <template v-for="label in article.labels">{{" #" + label}}</template>
          </span>
        </div>
      </article>
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
      posts: "",
      bloggerJSON,
      spinner: true
    };
  },
  head() {
    return {
      title: "OgbeniHMMD's Blog"
    };
  },
  created() {
    axios
      .get(
        `https://www.googleapis.com/blogger/v3/blogs/${this.bloggerJSON.id}/posts?key=${this.bloggerJSON.key}&fetchBodies=false&maxResult=${this.bloggerJSON.maxNews}`
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