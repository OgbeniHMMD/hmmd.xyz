<template>
  <div>
    <header-section id="top" />
    <quote-section id="quote" />
    <portfolio-section id="portfolio" />
    <contact-section id="contact" />
    <footer-section id="footer" />
  </div>
</template>


<script>
import HeaderSection from "~/components/HeaderSection.vue";
import QuoteSection from "~/components/QuoteSection.vue";
import PortfolioSection from "~/components/PortfolioSection.vue";
import ContactSection from "~/components/ContactSection.vue";
import FooterSection from "~/components/FooterSection.vue";

export default {
  components: {
    HeaderSection,
    QuoteSection,
    PortfolioSection,
    ContactSection,
    FooterSection,
  },

  head: {
    title: "OgbeniHMMD — hmmd.xyz",
  },
};
</script>
