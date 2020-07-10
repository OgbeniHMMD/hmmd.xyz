<template>
	<div>
		<the-header id="top" />
		<the-quote id="quote" />
		<portfolio-section id="portfolio" />
		<contact-section id="contact" />
	</div>
</template>


<script>
import TheHeader from "~/components/TheHeader.vue";
import TheQuote from "~/components/TheQuote.vue";
import PortfolioSection from "~/components/PortfolioSection.vue";
import ContactSection from "~/components/ContactSection.vue";

export default {
	components: {
		TheHeader,
		TheQuote,
		PortfolioSection,
		ContactSection
	}
};
</script>