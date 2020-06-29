<template>
	<section class="container p-2 mb-5">
		<div
			:key="article.slug"
			class="bg-white position-relative rounded text-center shadow-sm py-5 my-3"
			v-for="article in articles"
		>
			<a :href="'/blog/' + article.slug" class="stretched-link">
				<h1 class="mt-0 mb-2">{{article.title}}</h1>
			</a>

			<div class="text-muted text-small">
				<i class="fas fa-clock mr-2"></i>
				<span>
					{{
					new Date(article.createdAt)
					.toDateString()
					}}
				</span>
				<span v-if="article.tags">
					<i class="fas fa-tag mx-2"></i>
					<template v-for="tag in article.tags">{{" #" + tag}}</template>
				</span>
			</div>
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
			title: "OgbeniHMMD's Blog"
		};
	},

	async asyncData({ $content, params, error }) {
		let articles;

		try {
			articles = await $content("articles")
				.only(["title", "slug", "tags", "createdAt"])
				.fetch();
		} catch (e) {
			return error({ statusCode: 404, message: "Page not found" });
		}

		return {
			articles
		};
	}
};
</script>