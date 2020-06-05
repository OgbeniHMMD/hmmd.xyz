<template>
  <section class="container p-2">
    <header class="border-bottom py-2">
      <h1 class="mt-0">{{article.title}}</h1>
      <div class="text-muted mt-auto">
        <span>
          <i class="fa fa-clock mr-2"></i>
          {{ new Date(article.createdAt).toDateString() }}
        </span>
        <span>
          <i class="fa fa-user m-2"></i>
          <a :href="'/author/'+article.author">{{ article.author }}</a>
        </span>
        <span v-if="article.tags">
          <i class="fa fa-tag m-2"></i>
          <a
            class="mr-3"
            v-bind:key="tag"
            v-for="tag in article.tags"
            :href="'/tag/'+article.author"
          >{{ '#' + tag }}</a>
        </span>
        <span v-if="article.updatedAt">
          <i class="fa fa-clock mr-2"></i>
          Updated: {{ new Date(article.updatedAt).toDateString() }}
        </span>
      </div>
    </header>

    <nuxt-content :document="article" class="mt-4 lead" />

    <div class="mt-4">
      <vue-disqus
        shortname="hmmd"
        :identifier="$route.params.slug"
        :url="`https://hmmd.xyz/blog/${$nuxt.$route.fullPath}`"
      ></vue-disqus>
    </div>
  </section>
</template>


<script>
export default {
  layout: "blog",

  data: function() {
    return {};
  },
  head() {
    return {
      title: this.article.title + " - " + process.env.blog.name,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.article.description
        },
        // Open Graph
        { hid: "og:title", property: "og:title", content: this.article.title },
        {
          hid: "og:description",
          property: "og:description",
          content: this.article.description
        },
        // Twitter Card
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.article.title
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.article.description
        }
      ]
    };
  },

  async asyncData({ $content, params, error }) {
    let article;
    const slug = "articles/" + params.slug;

    try {
      article = await $content(slug).fetch();
    } catch (e) {
      return error({ statusCode: 404, message: "Page not found" });
    }

    return {
      article
    };
  }
};
</script>
