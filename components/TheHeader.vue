<template>
  <div
    class="d-flex justify-content-center align-items-center flex-column min-vh-100 vh-100 border-bottom text-center p-2 m-0 my-auto"
  >
    <div class="w-100 text-primary">
      <img
        id="photo"
        src="~/assets/img/OgbeniHMMD.jpg"
        class="img-fluid rounded-circle border border-primary"
        alt="OgbeniHMMD"
      />
      <div class="display-4 my-3" style=" ">Olajide A. Hammed</div>
      <div class="h2 mb-0 my-3">Freelancer &mdash; Frontend web developer</div>

      <div class="h1 mb-0 p-1">
        <a href="#about" title="About">
          <i class="fa fa-chevron-circle-down bounce p-2 p-sm-3 px-md-4 m-1"></i>
        </a>

        <a href="#contact" title="Contact">
          <i class="fa fa-envelope p-2 p-sm-3 px-md-4 m-1"></i>
        </a>

        <a href="/blog" title="Blog">
          <i class="fa fa-newspaper-o p-2 p-sm-3 px-md-4 m-1"></i>
        </a>

        <a href="//t.me/OgbeniHMMD" title="Telegram">
          <i class="fa fa-telegram p-2 p-sm-3 px-md-4 m-1"></i>
        </a>

        <a href="//twitter.com/OgbeniHMMD" title="Twitter">
          <i class="fa fa-twitter p-2 p-sm-3 px-md-4 m-1"></i>
        </a>

        <a href="//github.com/OgbeniHMMD" title="Github">
          <i class="fa fa-github p-2 p-sm-3 px-md-4 m-1"></i>
        </a>
      </div>
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