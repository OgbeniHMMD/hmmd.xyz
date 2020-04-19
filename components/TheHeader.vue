<template>
  <div id="header">
    <div
      class="d-flex justify-content-center align-items-center min-vh-100 border-bottom text-center p-2 m-0 my-auto"
      style="background-image: url('https://www.transparenttextures.com/patterns/subtle-grey.png')"
    >
      <div class="text-primary">
        <img
          id="photo"
          src="~/assets/img/OgbeniHMMD.jpg"
          class="rounded-circle border border-primary"
          width="250"
          alt="OgbeniHMMD"
        />
        <div class="display-4 mt-3" style=" ">Olajide A. Hammed</div>
        <div class="h2 mt-3">Freelancer, Front-end web developer...</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#photo {
  animation: 1s appear;
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