<template>
  <section class="min-vh-100 border-bottom m-0 my-auto">
    <div class="p-3 p-md-5 lead">
      <div class="h1 mb-4">Portfolio</div>

      <div class="row mb-4">
        <div v-for="n in 6" class="col-12 col-sm-6 p-2">
          <div class="card border-0">
            <img src="/thumb.jpg" class="card-img-top" alt="..." />
            <div class="card-body p-2">
              <p class="card-text text-muted">The five boxing wizards jump quickly.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center">
        <a href="https://github.com/OgbeniHmmd" class="btn btn-outline-primary shadow btn-lg px-5">
          Continue browsing
          <i class="fas fa-chevron-right ml-3"></i>
        </a>
      </div>
    </div>
  </section>
</template>
