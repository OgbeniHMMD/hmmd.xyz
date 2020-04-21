<template>
  <div id="header">
    <div
      class="d-flex justify-content-center align-items-center min-vh-100 border-primary border-bottom text-center p-2 m-0 my-auto"
      style="background-image: url('/patterns/subtle-grey.png')"
    >
      <div class="row m-0">
        <div class="col-12 p-0 text-primary">
          <img
            id="photo"
            src="~/assets/img/OgbeniHMMD.jpg"
            class="img-fluid rounded-circle border border-primary"
            alt="OgbeniHMMD"
          />
          <div class="display-4 mt-3" style=" ">Olajide A. Hammed</div>
          <div class="h2 mt-3">Freelancer, Front-end web developer...</div>

          <jump-down anchor="about" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JumpDown from "~/components/JumpDown.vue";

export default {
  components: {
    JumpDown
  }
};
</script>

<style lang="scss">
#photo {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>