<template>
	<div id="blog">
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

<style lang="scss">
@import "~/assets/styles/importer.scss";
</style>
