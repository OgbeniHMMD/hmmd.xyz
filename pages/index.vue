<template>
  <div>
    <the-header />
    <about-me />
    <contact-me />
    <social-links />
  </div>
</template>


<script>
import TheHeader from "~/components/TheHeader.vue";
import AboutMe from "~/components/AboutMe.vue";
import ContactMe from "~/components/ContactMe.vue";
import SocialLinks from "~/components/SocialLinks.vue";

export default {
  components: {
    TheHeader,
    AboutMe,
    ContactMe,
    SocialLinks
  }
};
</script>

