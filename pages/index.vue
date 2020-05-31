<template>
  <div class="row m-0 mw-100">
    <nav id="header" class="position-lg-fixed bg-light col-12 col-lg-5 col-xl-4 p-0 shadow">
      <the-header id="top" />
    </nav>
    <main class="col-12 col-lg-7 col-xl-8 offset-lg-5 offset-xl-4 p-0">
      <intro-section id="intro" />
      <portfolio-section id="portfolio" />
      <contact-section id="contact" />
    </main>
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