<template>
  <div class="row m-0 mw-100">
    <nav id="header" class="position-lg-fixed bg-light col-12 col-lg-5 col-xl-4 p-0 shadow">
      <the-header id="top" />
    </nav>
    <main class="col-12 col-lg-7 col-xl-8 offset-lg-5 offset-xl-4 p-0">
      <intro-section id="intro" />
      <portfolio id="portfolio" />
      <contact-me id="contact" />
    </main>
  </div>
</template>


<script>
import TheHeader from "~/components/TheHeader.vue";
import IntroSection from "~/components/IntroSection.vue";
import Portfolio from "~/components/Portfolio.vue";
import ContactMe from "~/components/ContactMe.vue";

export default {
  components: {
    TheHeader,
    IntroSection,
    Portfolio,
    ContactMe
  }
};
</script>