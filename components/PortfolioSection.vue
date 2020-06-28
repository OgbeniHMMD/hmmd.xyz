<template>
	<section class="min-vh-100 border-bottom m-0 my-auto">
		<div class="p-3 p-md-5 lead">
			<div class="h1 mb-3">Portfolio</div>

			<div class="row mb-4">
				<div v-for="n in 6" class="col-12 col-sm-6 p-0">
					<div class="m-3 shadow-sm overflow-hidden">
						<div class="shrink">
							<a href="#">
								<img src="/thumb.jpg" class="img-fluid" alt="..." />
							</a>
						</div>

						<div class="p-1">
							<div class="d-flex justify-content-between align-items-center">
								<a class="text-muted" href="#">Project Title</a>
								<a title="Github" class="p-1" href="#">
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
					class="btn btn-outline-primary shadow btn-lg px-5"
				>
					Continue browsing
					<i class="fas fa-chevron-right ml-3"></i>
				</a>
			</div>
		</div>
	</section>
</template>
