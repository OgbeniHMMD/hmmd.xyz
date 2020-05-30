<template>
  <div
    class="d-flex justify-content-center align-items-center min-vh-100 vh-100 border-bottom p-2 m-0 my-auto"
  >
    <div class="container p-3">
      <div class="row">
        <h1 class="col-12 p-0 mb-4">Contact Me</h1>

        <div
          v-if="alert.msg"
          class="col-12 alert text-center"
          :class="`alert-${alert.type}`"
          v-html="alert.msg"
        ></div>

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
          <a href="#top" title="Home" class="display-4">
            <i class="bounce fa fa-home"></i>
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
      alert: {},
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
      this.name = "";
      this.email = "";
      this.alert = {};
      this.textArea = "";
    },

    validateData() {
      if (this.name === "") {
        this.alert = { type: "warning", msg: "Please enter a name" };
      } else if (this.email === "" || !this.reg.test(this.email)) {
        this.alert = {
          type: "warning",
          msg: "Enter a valid e-mail"
        };
      } else if (this.textArea === "") {
        this.alert = { type: "warning", msg: "Please enter your message" };
      } else {
        this.sendMsg();
      }
    },

    async sendMsg() {
      try {
        this.alert = {
          type: "dark",
          msg: `<i class='fa fa-spinner fa-spin mr-3'></i>Sending Message...`
        };

        await axios.get(
          `https://api.telegram.org/${this.token}/sendMessage?chat_id=${
            this.chatId
          }&text=${encodeURIComponent(
            this.textArea + "\n \n- - - - -\n" + this.name + " | " + this.email
          )}&parse_mode=html`
        );

        this.reset();
        this.alert = { type: "success", msg: "Message Sent!" };
      } catch (e) {
        this.alert = {
          type: "danger",
          msg:
            "An error occured, your Message was not sent. <br /> Alternatively, you can send an email to <b>Ogbeni@hmmd.xyz</b>"
        };
      }
    }
  }
};
</script>
