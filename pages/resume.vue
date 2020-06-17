<template>
	<div class="p-5 min-vh-100" style="background-image: url('/patterns/stardust.png')">
		<div class="container border border-primary">
			<div class="row">
				<aside class="col-4 bg-primary p-0">
					<div class="bg-primary text-white border-bottom border-white px-3 py-5">
						<div class="text-center">
							<img
								id="photo"
								src="~/assets/img/OgbeniHMMD.jpg"
								class="img-fluid rounded-circle border border-white"
								alt="OgbeniHMMD"
							/>
						</div>
						<div class="py-3 text-break">
							<i class="fas fa-phone fa-pull-left mr-3"></i> +234 (0)810 092 8503
						</div>
						<div class="py-3 text-break">
							<i class="fas fa-envelope fa-pull-left mr-3"></i> Olajide.A.Hammed@gmail.com
						</div>
						<div class="py-3 text-break">
							<i class="fas fa-map-marker fa-pull-left mr-4"></i> Lagos, Nigeria
						</div>
						<div class="py-3 text-break">
							<a class="text-white text-decoration-none" href="/">
								<i class="fa fa-link mr-3"></i> www.hmmd.xyz
							</a>
						</div>
						<div class="py-3 text-break">
							<a class="text-white text-decoration-none" href="//github.ccom/OgbeniHMMD">
								<i class="fab fa-github mr-3"></i> github.com/OgbeniHMMD
							</a>
						</div>
					</div>

					<div class="bg-primary text-white px-4 py-5 mb-5">
						<div class="h1 mb-4">
							<i class="fas fa-tools mr-3"></i> SKILLS
						</div>
						<div class="py-3">
							<i class="fas fa-code mr-3"></i> HTML5 / CSS3
						</div>
						<div class="py-3">
							<i class="fab fa-bootstrap mr-3"></i> Bootstrap
						</div>
						<div class="py-3">
							<i class="fab fa-js-square mr-3"></i> Javascript
						</div>
						<div class="py-3">
							<i class="fab fa-vuejs mr-3"></i> Vue.js
						</div>
						<div class="py-3">
							<i class="fab fa-git mr-3"></i> Git
						</div>
						<div class="py-3">
							<i class="fab fa-linux mr-3"></i> Linux/CLI
						</div>
					</div>
				</aside>

				<main class="col-8 bg-white text-primary p-0">
					<div class="p-5">
						<div class="display-3">Olajide A. Hammed</div>
						<div class="h2">Frontend Web Developer</div>
					</div>

					<div class="p-5 border-top border-primary">
						<div class="d-flex w-100">
							<div>
								<i class="fas fa-user h1 mr-4"></i>
							</div>
							<div class="w-100">
								<div class="h1">PROFILE</div>
								<div class="pb-4">
									<p>
										I am a freelance &mdash; javascript &mdash; frontend web developer. I build web apps usually with the JAMstack,
										I.e, Javascript (vanilla JS, ES6, Vue.js), the markup languages and/or frameworks (Html/CSS, Bootstrap), and maybe some Everything-as-a-Service (Xaas) solutions.
									</p>
									<p>I have histories with ASP.NET/VB.NET, Java(SE), Python, PHP (Code Igniter, Laravel), Wordpress...</p>
									<p>I don't crumble under pressure, and I'm ever willing to learn new technologies.</p>
									<p>I'm looking for the role of a junior web developer.</p>
								</div>
							</div>
						</div>
					</div>

					<div class="p-5 border-top border-primary">
						<div class="d-flex">
							<div>
								<i class="fas fa-user-graduate h1 mr-4"></i>
							</div>
							<div class="w-100">
								<div class="h1">EDUCATION</div>
								<div class="pb-4">
									<div class="font-weight-bold">HIGHER NATIONAL DIPLOMA &mdash; Computer Science</div>
									<div>Lagos State Polytechnic, [in view 2021]</div>
								</div>

								<div class="pb-4">
									<div class="font-weight-bold">NATIONAL DIPLOMA &mdash; Computer Science</div>
									<div>
										Lagos State Polytechnic,
										<time>2015</time>
									</div>
								</div>

								<div class="pb-4">
									<div class="font-weight-bold">
										SSCE &mdash;
										<time>2010</time>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="p-5 border-top border-primary">
						<div class="d-flex">
							<div class="h1">
								<i class="fa fa-paint-brush mr-4"></i>
							</div>
							<div class="w-100">
								<div class="h1">INTERESTS</div>
								<p>
									<i class="fas fa-circle-thin mr-3"></i> Reading
								</p>
								<p>
									<i class="fas fa-circle-thin mr-3"></i> Sewing
								</p>
								<p>
									<i class="fas fa-circle-thin mr-3"></i> Volunteer Work/Community Involvement
								</p>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	head() {
		return {
			title: "Olajide A. Hammed - Resume",
			meta: [{ name: "viewport", content: "initial-scale=0.1" }]
		};
	}
};
</script>

<style scoped>
.container,
.container-fluid {
	/* Set width to your desired site width */
	max-width: 1170px;
}
</style>