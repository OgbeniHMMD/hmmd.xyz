<template>
  <div id="contact">
    <div
      class="d-flex justify-content-center align-items-center min-vh-100 border-dark border-bottom text -center p-2 m-0 my-auto"
      style="background-image: url('/patterns/white-texture.png')"
    >
      <form class="container">
        <div class="row">
          <h1 class="col-12 mb-4">Contact Me</h1>

          <div
            class="col-12 alert alert-warning alert-dismissible fade show text-center"
            role="alert"
          >
            <strong>NB:</strong> This feature is not working yet. Please check back later.
          </div>

          <div
            role="alert"
            v-if="alert "
            class="col-12 alert alert-success alert-dismissible fade show text-center"
          >
            {{errMsg}}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="col-12 col-md-6">
            <input class="form-control form-control-lg border-0 shadow mb-4" placeholder="Name" />
          </div>
          <div class="col-12 col-md-6">
            <input
              class="form-control form-control-lg border-0 shadow mb-4"
              placeholder="E-mail@Example.com"
              type="email"
            />
          </div>
          <div class="col-12">
            <textarea
              class="form-control form-control-lg border-0 shadow mb-4"
              placeholder="Your Message..."
              rows="4"
            ></textarea>
          </div>
        </div>

        <div class="row">
          <button
            type="reset"
            class="btn btn-lg btn-outline-danger col shadow mr-4"
            v-on:click="alert=null"
          >
            <i class="fa fa-times mr-4" />Reset
          </button>

          <button
            class="btn btn-lg btn-outline-primary col shadow"
            v-on:click="showalert('success', 'Message sent...')"
          >
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
      alert: null,
      errMsg: null
    };
  },
  methods: {
    removeAlert() {
      this.alert = "";
    },
    showalert(type, msg) {
      this.alert = type;
      this.errMsg = msg;
    }
  }
};
</script>
