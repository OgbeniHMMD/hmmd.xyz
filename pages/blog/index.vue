<template>
  <div class="container py-4">
    <div v-if="!posts" class="text-center">
      <i class="fa fa-spinner h1 text-primary m-5"></i>
    </div>

    <div>
      <article
        class="position-relative border-bottom border-primary text-center py-5"
        v-for="article in posts.items"
        :key="article.id"
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
          <span>
            <i class="fa fa-user-o mx-2"></i>
            {{article.author.displayName}}
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
      loading: true
    };
  },
  methods: {
    async fetchPosts() {
      axios
        .get(
          "https://www.googleapis.com/blogger/v3/blogs/" +
            this.bloggerJSON.id +
            "/posts" +
            "?key=" +
            this.bloggerJSON.key +
            "&fetchBodies=false&maxResult=" +
            this.bloggerJSON.maxNews
          //REF: https://alligator.io/vuejs/rest-api-axios/
        )
        .then(response => {
          // JSON responses are automatically parsed.
          this.posts = response.data;
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  },
  created() {
    this.fetchPosts();
  }
};
</script>

<style lang="scss" scoped>
#blog {
  background-image: url("/patterns/stardust.png");
}
</style>