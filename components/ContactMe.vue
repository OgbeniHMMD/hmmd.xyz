<template>
  <div id="contact">
    <div
      class="d-flex justify-content-center align-items-center min-vh-100 border-bottom text -center p-2 m-0 my-auto"
      style="background-image: url('https://www.transparenttextures.com/patterns/white-texture.png')"
    >
      <form class="container">
        <div class="row">
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
            <i class="fa fa-cancel" /> Reset
          </button>
          <button class="btn btn-lg btn-outline-primary col shadow">Send Message</button>
        </div>
      </form>
    </div>
  </div>
</template>
