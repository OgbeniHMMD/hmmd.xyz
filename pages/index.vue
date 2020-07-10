<template>
	<div>
		<the-header id="top" />

		<intro-section id="intro" />
		<portfolio-section id="portfolio" />
		<contact-section id="contact" />
	</div>
</template>


<script>
import TheHeader from "~/components/TheHeader.vue";
import IntroSection from "~/components/IntroSection.vue";
import PortfolioSection from "~/components/PortfolioSection.vue";
import ContactSection from "~/components/ContactSection.vue";

export default {
	components: {
		TheHeader,
		IntroSection,
		PortfolioSection,
		ContactSection
	}
};
</script>