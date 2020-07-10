<template>
	<section class="d-flex justify-content-center align-items-center min-vh-100 m-0 my-auto">
		<div class="container p-4 p-md-5">
			<div class="row">
				<div
					v-if="alert.msg"
					class="col-12 lead alert shadow-sm"
					:class="'alert-'+ alert.type"
					v-html="alert.msg"
				></div>
				<div v-else class="col-12 h1 p-0 mb-4">Contact Me</div>

				<div class="col-12 col-md-6 p-0">
					<input
						id="name"
						required
						v-model.trim="name"
						class="form-control form-control-lg border-0 round ed-0 shadow mb-4"
						placeholder="Your name"
					/>
				</div>

				<div class="col-12 col-md-6 p-0 pl-md-3">
					<input
						id="email"
						required
						type="email"
						v-model.trim="email"
						class="form-control form-control-lg border-0 rounded-sm shadow mb-4"
						placeholder="E-mail@Example.com"
					/>
				</div>

				<div class="col-12 p-0">
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
				<a class="col-3 h1 text-center text-dark" href="#" title="Jump Up">
					<i class="fa fa-chevron-circle-up bounce"></i>
				</a>

				<button
					type="reset"
					title="Clear all fields"
					class="col btn btn-md-lg btn-outline-danger shadow mr-3 mr-md-4 font-weight-bold"
					v-on:click="reset()"
				>
					<i class="fas fa-times mr-4" />Reset
				</button>

				<button
					title="Send Message"
					v-on:click="validateData()"
					class="btn btn-md-lg btn-outline-primary col shadow font-weight-bold"
				>
					<i class="fas fa-envelope mr-4"></i>Send
				</button>
			</div>
		</div>
	</section>
</template>


<script>
import axios from "axios";

export default {
	data: function() {
		return {
			alert: "",
			name: "",
			email: "",
			textArea: ""
		};
	},

	methods: {
		reset() {
			this.name = "";
			this.email = "";
			this.alert = "";
			this.textArea = "";
		},

		validateData() {
			const reg = /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;

			if (this.name === "") {
				this.alert = {
					type: "warning",
					msg: "<i class='fa fa-user mr-3'></i>Please Enter Your Name"
				};
			} else if (this.email === "" || !reg.test(this.email)) {
				this.alert = {
					type: "warning",
					msg: "<i class='fa fa-envelope mr-3'></i>Please Enter A Valid E-mail"
				};
			} else if (this.textArea === "") {
				this.alert = {
					type: "warning",
					msg: "<i class='fa fa-pen mr-3'></i>Please Enter Your Message"
				};
			} else {
				this.sendMsg();
			}
		},

		async sendMsg() {
			try {
				const chatId = "1229306973";
				const token = "bot1200246144:AAFgPUdih32F60oA-C-Ratzoxdqvm_7R6A8";
				const msg = `${this.textArea}\n \n- - - - -\n${this.name} | ${this.email}`;

				// Show the sending message
				this.alert = {
					type: "dark",
					msg: `<i class="spinner-border mr-3" role="status" aria-hidden="true"></i>Sending Message...`
				};

				// Send message
				await axios.get(`https://api.telegram.org/${token}/sendMessage`, {
					params: {
						chat_id: chatId,
						text: msg.replace(/</g, "&lt;").replace(/>/g, "&gt;"),
						parse_mode: "html"
					}
				});

				// show success alert
				this.reset();
				this.alert = {
					type: "success",
					msg: "<i class='fa fa-check mr-3'></i>Message Sent!"
				};
			} catch (e) {
				//show danger alertl
				this.alert = {
					type: "danger",
					msg:
						"<i class='fa fa-exclamation-triangle mr-2'></i>Message was not sent. Maybe you lost your connection."
				};
			}
		}
	}
};
</script>
