<template>
  <div
    id="contact"
    class="d-flex justify-content-center align-items-center min-vh-100 border-dark border-bottom text -center p-2 m-0 my-auto"
    style="background-image: url('/patterns/white-texture.png')"
  >
    <div class="container p-3">
      <div class="row">
        <h1 class="col-12 p-0 mb-4">Contact Me</h1>

        <div
          role="alert"
          v-if="alertMsg"
          :class="'alert-' + alertType"
          class="col-12 alert fade show text-center"
        >
          <span v-html="alertMsg"></span>
        </div>

        <div class="col-12 col-md-6 p-0">
          <input
            id="name"
            required
            v-model.trim="name"
            class="form-control form-control-lg border-dark shadow mb-4"
            placeholder="Name"
          />
        </div>

        <div class="col-12 col-md-6 p-0 pl-md-3">
          <input
            id="email"
            required
            type="email"
            v-model.trim="email"
            class="form-control form-control-lg border-dark shadow mb-4"
            placeholder="E-mail@Example.com"
          />
        </div>

        <div class="col-12 p-0">
          <textarea
            rows="4"
            required
            v-model.trim="textArea"
            placeholder="Your Message..."
            class="form-control form-control-lg border-dark shadow mb-4"
          ></textarea>
        </div>
      </div>

      <div class="row mt-3">
        <button
          type="reset"
          title="Clear all fields"
          class="btn btn-outline-danger col shadow mr-4"
          v-on:click="reset()"
        >
          <i class="fa fa-times mr-4" />Reset
        </button>

        <button
          title="Send Message"
          v-on:click="validateData()"
          class="btn btn-outline-primary col shadow"
        >
          <i class="fa fa-envelope-o mr-4"></i>Send
        </button>

        <div class="col-2 text-center">
          <a href="#top" title="Home">
            <i class="bounce fa fa-home display-4 mb-0"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data: function() {
    return {
      alertType: null,
      alertMsg: null,

      name: "",
      email: "",
      textArea: "",

      chatId: "1229306973",
      token: "bot1200246144:AAFgPUdih32F60oA-C-Ratzoxdqvm_7R6A8",
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
    };
  },

  methods: {
    reset() {
      this.alerType = "";
      this.alertMsg = "";

      this.name = "";
      this.email = "";
      this.textArea = "";
    },

    showAlert(type, msg) {
      this.alertType = type;
      this.alertMsg = msg;
    },

    validateData() {
      if (this.name === "") {
        this.showAlert("warning", "Please enter a name");
      } else if (this.email === "" || !this.reg.test(this.email)) {
        this.showAlert("warning", "Your e-mail is invalid");
      } else if (this.textArea === "") {
        this.showAlert("warning", "Please enter your message");
      } else {
        this.sendMsg();
      }
    },

    async sendMsg() {
      try {
        await axios.get(
          `https://api.telegram.org/${this.token}/sendMessage?chat_id=${
            this.chatId
          }&text=${encodeURIComponent(
            this.textArea + "\n \n- - - - -\n" + this.name + " | " + this.email
          )}&parse_mode=html`
        );
        this.showAlert("success", "Message sent. Thank you!");
      } catch (e) {
        this.showAlert(
          "danger",
          "An error occured, your Message was not sent. <br /> Alternatively, you can send an email to <b>Ogbeni@hmmd.xyz</b>"
        );
      }
    }
  }
};
</script>
