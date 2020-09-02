<template>
  <section class="border-bottom">
    <div class="container-fluid p-3 p-md-4 p-lg-5">
      <div class="mb-3">
        <span class="h1 mb-0">Recent works</span>
        <span class="font-weight-bold ml-4">
          &raquo;
          <a class="ml-2" href="https://github.com/OgbeniHMMD">Github</a>
        </span>
      </div>

      <div class="row mb-4">
        <div v-for="(work, index) in works" v-bind:key="index" class="col-12 col-sm-6 col-lg-4 p-2">
          <div class="d-flex flex-column justify-between shadow-sm rounded-sm h-100">
            <div class="text-center">
              <a :href="work.url">
                <img :src="work.img" class="img-fluid rounded-top w-100" alt="..." />
              </a>
            </div>

            <div class="flex-grow-1 text-center text-muted lead p-2">
              <div class="my-auto">{{ work.description }}</div>
            </div>

            <div
              class="d-flex justify-content-between align-items-center"
              style="font-size: 1.5rem"
            >
              <a title="Github" class="px-2" :href="work.github">
                <i class="fab fa-github"></i>
              </a>
              <a class="px-2" title="Live demo" :href="work.url">
                <i class="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import worksJSON from "~/assets/json/portfolio.json";

export default {
  data: function () {
    return {
      works: worksJSON,
    };
  },
};
</script>
