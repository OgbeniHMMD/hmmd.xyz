<template>
	<div>
		<header-section id="top" />
		<quote-section id="quote" />
		<portfolio-section id="portfolio" />
		<contact-section id="contact" />
	</div>
</template>


<script>
import HeaderSection from "~/components/HeaderSection.vue";
import QuoteSection from "~/components/QuoteSection.vue";
import PortfolioSection from "~/components/PortfolioSection.vue";
import ContactSection from "~/components/ContactSection.vue";

export default {
	components: {
		HeaderSection,
		QuoteSection,
		PortfolioSection,
		ContactSection
	}
};
</script>
