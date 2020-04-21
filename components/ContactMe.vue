<template>
  <div id="contact">
    <a name="contact"></a>
    <div
      class="d-flex justify-content-center align-items-center min-vh-100 border-dark border-bottom text -center p-2 m-0 my-auto"
      style="background-image: url('/patterns/white-texture.png')"
    >
      <div class="container">
        <div class="row">
          <h1 class="col-12 mb-4">Contact Me</h1>

          <div
            role="alert"
            v-if="alertType"
            :class="'alert-' + alertType"
            class="col-12 alert alert-dismissible fade show text-center"
          >
            <span v-html="alertMsg"></span>
          </div>

          <div class="col-12 col-md-6">
            <input
              id="name"
              required
              v-model.trim="name"
              class="form-control form-control-lg border-0 shadow mb-4"
              placeholder="Name"
            />
          </div>
          <div class="col-12 col-md-6">
            <input
              id="email"
              required
              type="email"
              v-model.trim="email"
              class="form-control form-control-lg border-0 shadow mb-4"
              placeholder="E-mail@Example.com"
            />
          </div>
          <div class="col-12">
            <textarea
              rows="4"
              required
              v-model.trim="textArea"
              placeholder="Your Message..."
              class="form-control form-control-lg border-0 shadow mb-4"
            ></textarea>
          </div>
        </div>

        <div class="row">
          <button
            type="reset"
            class="btn btn-lg btn-outline-danger col shadow mr-4"
            v-on:click="reset()"
          >
            <i class="fa fa-times mr-4" />Reset
          </button>

          <button class="btn btn-lg btn-outline-primary col shadow" v-on:click="validateData()">
            <i class="fa fa-envelope-o mr-4"></i>Send
          </button>

          <div class="col-2 text-center">
            <jump-down anchor="social" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import JumpDown from "~/components/JumpDown.vue";

export default {
  components: {
    JumpDown
  },
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
          "https://api.telegram.org/" +
            this.token +
            "/sendMessage?chat_id=" +
            this.chatId +
            "&text=" +
            encodeURIComponent(
              this.textArea +
                "\n \n- - - - -\n" +
                this.name +
                " | " +
                this.email
            ) +
            "&parse_mode=html"
        );
        this.showAlert("success", "Message sent. Thank you!");
      } catch (e) {
        console.log("An Error Occured: ");
        this.showAlert(
          "danger",
          "Sorry, an error occured. <b>Your Message was not sent.</b>"
        );
      }
    }
  }
};
</script>
