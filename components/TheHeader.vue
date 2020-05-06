<template>
  <div
    id="top"
    class="d-flex justify-content-center align-items-center flex-column min-vh-100 border-primary border-bottom text-center p-2 m-0 my-auto"
    style="background-image: url('/patterns/subtle-grey.png')"
  >
    <div class="w-100 p-2 text-primary">
      <img
        id="photo"
        src="~/assets/img/OgbeniHMMD.jpg"
        class="img-fluid rounded-circle border border-primary"
        alt="OgbeniHMMD"
      />
      <div class="display-4 my-3" style=" ">Olajide A. Hammed</div>
      <div class="h2 mt-3">Freelancer &mdash; Frontend web developer</div>
    </div>

    <div class="h1 p-1 m-1">
      <a href="#about" title="About">
        <i class="fa fa-info-circle px-4 py-3"></i>
      </a>

      <a href="#contact" title="Contact">
        <i class="fa fa-envelope px-4 py-3"></i>
      </a>

      <a href="/blog" title="Blog">
        <i class="fa fa-newspaper-o px-4 py-3"></i>
      </a>

      <a href="//t.me/OgbeniHMMD" title="Telegram">
        <i class="fa fa-telegram px-4 py-3"></i>
      </a>

      <a href="//twitter.com/OgbeniHMMD" title="Twitter">
        <i class="fa fa-twitter px-4 py-3"></i>
      </a>

      <a href="//github.com/OgbeniHMMD" title="Github">
        <i class="fa fa-github px-4 py-3"></i>
      </a>
    </div>
  </div>
</template>


<style lang="scss">
#photo {
  animation: 2s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>