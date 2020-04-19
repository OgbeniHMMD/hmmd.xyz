<template>
  <div id="about">
    <div
      class="d-flex justify-content-center align-items-center min-vh-100 border-dark border-bottom text-center m-0 my-auto"
      style="background-image: url('https://www.transparenttextures.com/patterns/asfalt-dark.png')"
    >
      <div>
        <div class="h1">
          <i class="fa fa-info-circle"></i>
        </div>
        <div class="h1">About Me</div>
        <p class="lead">Bla Bla Bla..</p>

        <jump-down anchor="contact" />
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
