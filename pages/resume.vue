<template>
  <div class="p-5 min-vh-100">
    <div class="container border border-primary shadow-sm rounded">
      <div class="row">
        <resume-sidebar />

        <main class="col-8 bg-white text-primary p-0">
          <div class="p-4">
            <div class="font-righteous display-3">Olajide A. Hammed</div>
            <div class="h2">Frontend Web Developer</div>
          </div>

          <div class="p-5 border-top border-primary">
            <div class="d-flex w-100">
              <div>
                <i class="fas fa-user h1 mr-4"></i>
              </div>
              <div class="w-100">
                <resume-introduction />
              </div>
            </div>
          </div>

          <div class="p-5 border-top border-primary">
            <div class="d-flex">
              <div>
                <i class="fas fa-user-graduate h1 mr-4"></i>
              </div>
              <div class="w-100">
                <resume-education />
              </div>
            </div>
          </div>

          <section class="p-5 border-top border-primary">
            <div class="d-flex">
              <div>
                <i class="fas fa-suitcase h1 mr-4"></i>
              </div>
              <div class="w-100">
                <resume-work-experience />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  </div>
</template>


<script>
  import worksJSON from "~/assets/json/portfolio.json";

  export default {
    head: {
      title: "Olajide A. Hammed — Résumé",
    },

    data: function () {
      return {
        works: worksJSON,
      };
    },
  };
</script>



<style scoped>
  .container,
  .container-fluid {
    /* Set width to your desired site width */
    max-width: 1170px;
  }
</style>
