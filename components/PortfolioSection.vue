<template>
	<section class="min-vh-100 border-bottom m-0 my-auto">
		<div class="p-3 p-md-5 lead">
			<div class="h1 mb-3">Portfolio</div>

			<div class="row mb-4">
				<div v-for="work in works" class="col-12 col-sm-6 p-0">
					<div class="shadow-sm bord er m-3">
						<div class="text-center">
							<a :href="work.url">
								<img :src="work.img" class="img-fluid" alt="..." />
							</a>
						</div>

						<div class="p-1">
							<div class="d-flex justify-content-between align-items-center">
								<a :href="work.url">{{ work.title }}</a>
								<a title="Github" class="p-1" :href="work.github">
									<i class="fab fa-github"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="text-center">
				<a
					title="Continue browsing on Github"
					href="https://github.com/OgbeniHmmd"
					class="btn btn-outline-primary shadow-sm btn-lg px-5"
				>
					Continue browsing
					<i class="fas fa-chevron-right ml-3"></i>
				</a>
			</div>
		</div>
	</section>
</template>

<script>
import worksJSON from "~/assets/json/portfolio.json";

export default {
	data: function() {
		return {
			works: worksJSON
		};
	}
};
</script>
