<template>
	<div>
		<the-header id="top" />
		<the-quote id="quote" />
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