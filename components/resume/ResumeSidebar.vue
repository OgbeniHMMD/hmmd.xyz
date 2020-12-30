<template>
  <aside class="col-4 bg-primary p-0">
    <section class="bg-primary text-white border-bottom border-white px-3 py-5">
      <div class="text-center">
        <img
          id="photo"
          src="~/assets/img/OgbeniHMMD.jpg"
          class="img-fluid rounded-circle border border-white"
          alt="OgbeniHMMD Head Shot"
        />
      </div>

      <div
        class="py-3 text-break"
        v-for="contact in contacts"
        :key="contact.icon"
      >
        <i class="fa-pull-left mr-3" :class="contact.icon"></i>
        <a
          :href="contact.href"
          class="text-white text-decoration-none"
          v-text="contact.title"
        ></a>
      </div>
    </section>

    <section class="bg-primary text-white px-4 py-5 mb-5">
      <div class="h1 mb-4"><i class="fas fa-tools mr-3"></i> SKILLS</div>
      <div class="py-3" v-for="skill in skills" :key="skill.title">
        <i class="mr-3" :class="skill.icon"></i>
        <span v-text="skill.title"></span>
      </div>
    </section>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        {
          title: "+234 (0)810 092 8503",
          href: "tel:+2348100928503",
          icon: "fas fa-phone",
        },
        {
          title: "Olajide.A.Hammed@gmail.com",
          href: "mailto:Olajide.A.Hammed@gmail.com",
          icon: "fas fa-envelope",
        },
        {
          title: "Lagos, Nigeria",
          href: "http://maps.google.com/?q=Lagos+Nigeria",
          icon: "fas fa-map-marker",
        },
        { title: "www.hmmd.xyz", href: "/", icon: "fa fa-link" },
        {
          title: "LinkedIn.com/OgbeniHMMD",
          href: "https://www.linkedin.com/in/ogbenihmmd/",
          icon: "fab fa-linkedin",
        },
        {
          title: "Github.com/OgbeniHMMD",
          href: "https://github.com/OgbeniHMMD",
          icon: "fab fa-github",
        },
        { title: "", href: "", icon: "" },
      ],

      skills: [
        { title: "HTML5 / CSS3", icon: "fas fa-code" },
        { title: "SCSS / PostCSS", icon: "fab fa-css3" },
        { title: "Javascript", icon: "fab fa-js-square " },
        { title: "Typescript", icon: "fab fa-js-square " },
        { title: "Vue.js / Vuex & Nuxt.js", icon: "fab fa-vuejs" },
        { title: "React.js / Redux  & Gastby", icon: "fab fa-react" },
        { title: "Git / Github", icon: "fab fa-git" },
        { title: "Linux / CLI", icon: "fab fa-linux" },
        { title: "Netlify / AWS", icon: "fab fa-aws" },
      ],
    };
  },
};
</script>
