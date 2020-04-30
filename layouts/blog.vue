<template>
  <div id="blog" class="min-vh-100">
    <blog-header />
    <nuxt />
    <blog-footer />
  </div>
</template>

<script>
import BlogHeader from "~/components/blog/BlogHeader.vue";
import BlogFooter from "~/components/blog/BlogFooter.vue";

export default {
  components: {
    BlogHeader,
    BlogFooter
  }
};
</script>

<style lang="scss" scoped>
#blog {
  background-image: url("/patterns/stardust.png");
}
</style>