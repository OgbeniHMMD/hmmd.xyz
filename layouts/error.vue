<template>
  <div>
    <div
      class="d-flex justify-content-center align-items-center min-vh-100 border-dark border-bottom text -center p-2 m-0 my-auto"
      style="background-image: url('/patterns/stardust.png')"
    >
      <div>
        <div class="display-3 text-center">{{error.statusCode}} Error!</div>
        <div class="display-4 text-center">{{error.message}}</div>

        <div class="display-1git text-center">
          <i class="fa fa-frown-o"></i>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    return {
      title: "Error - OgbeniHMMD"
    };
  }
};
</script>