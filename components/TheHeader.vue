<template>
  <div
    id="top"
    class="d-flex justify-content-center align-items-center flex-column min-vh-100 border-primary border-bottom text-center p-2 m-0 my-auto"
    style="background-image: url('/patterns/subtle-grey.png')"
  >
    <div class="w-100 p-3 text-primary">
      <img
        id="photo"
        src="~/assets/img/OgbeniHMMD.jpg"
        class="img-fluid rounded-circle border border-primary"
        alt="OgbeniHMMD"
      />
      <div class="display-4 my-3" style=" ">Olajide A. Hammed</div>
      <div class="h2 my-3">Freelancer, Front-end web developer...</div>
    </div>

    <div class="h3 p-2 m-0">
      <a class="btn btn-lg btn-outline-primary mr-5" href="#about">About</a>
      <a class="btn btn-lg btn-outline-primary mr-5" href="#social">Contact</a>
      <a class="btn btn-lg btn-outline-primary" href="/blog">Blog</a>
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