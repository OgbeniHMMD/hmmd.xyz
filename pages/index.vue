<template>
  <div>
    <the-header id="top" />
    <about-me id="about" />
    <contact-me id="contact" />
    <portfolio id="works" />
    <social-links id="social" />
  </div>
</template>


<script>
import TheHeader from "~/components/TheHeader.vue";
import AboutMe from "~/components/AboutMe.vue";
import Portfolio from "~/components/Portfolio.vue";
import ContactMe from "~/components/ContactMe.vue";
import SocialLinks from "~/components/SocialLinks.vue";

export default {
  components: {
    TheHeader,
    AboutMe,
    Portfolio,
    ContactMe,
    SocialLinks
  }
};
</script>