<template>
  <div id="contact">
    <div
      class="d-flex justify-content-center align-items-center min-vh-100 border-dark border-bottom text -center p-2 m-0 my-auto"
      style="background-image: url('https://www.transparenttextures.com/patterns/white-texture.png')"
    >
      <form class="container" action="#!succes">
        <div class="row">
          <h1 class="col-12 mb-4">Contact Me</h1>

          <div
            v-if="alert=='success'"
            class="col-12 alert alert-success alert-dismissible fade show text-center d-none"
            role="alert"
          >
            Message sent!
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div
            v-if="alert=='danger'"
            class="col-12 alert alert-warning alert-dismissible fade show text-center d-none"
            role="alert"
          >
            Message sent!
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <input
            class="col-12 form-control form-control-lg border-0 shadow mb-4"
            placeholder="Your Name..."
          />
          <input
            class="col-12 form-control form-control-lg shadow mb-4"
            placeholder="E-mail@Example.com"
            type="email"
          />
          <input class="col-12 form-control form-control-lg shadow mb-4" placeholder="Phone Number" />
          <textarea
            class="col-12 form-control form-control-lg shadow mb-4"
            placeholder="Your Message..."
          ></textarea>
        </div>

        <div class="row">
          <button type="reset" class="btn btn-lg btn-outline-danger col shadow mr-4">
            <i class="fa fa-times mr-4" />Reset
          </button>

          <button class="btn btn-lg btn-outline-primary col shadow" @click="showalert('success')">
            <i class="fa fa-envelope-o mr-4"></i>Send
          </button>

          <div class="col-2 text-center">
            <jump-down anchor="social" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>



<script>
import JumpDown from "~/components/JumpDown.vue";

export default {
  components: {
    JumpDown
  },
  data: function() {
    return {
      alert: ""
    };
  },
  methods: {
    removeAlert() {
      this.alert = "";
    },
    showalert(var1) {
      this.alert = var1;
    }
  }
};
</script>
