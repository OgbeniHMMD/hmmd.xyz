<template>
  <div
    class="d-flex justify-content-center align-items-center min-vh-100 border-bottom m-0 my-auto"
  >
    <div class="p-3 p-md-5 lead">
      <div class="row">
        <div v-for="n in 6" class="col-12 col-sm-6 p-2">
          <div class="card border-0">
            <img src="/thumb.jpg" class="card-img-top" alt="..." />
            <div class="card-body p-2">
              <p class="card-text">The quick brown fox is a jumpper</p>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center">
        <a
          href="https://github.com/OgbeniHmmd"
          class="btn btn-outline-primary btn-lg px-4"
        >Continue browsing</a>
      </div>
    </div>
  </div>
</template>
