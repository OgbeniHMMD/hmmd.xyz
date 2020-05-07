<template>
  <div
    id="social"
    class="d-flex justify-content-center align-items-center min-vh-100 border-primary border-bottom text-center m-0 my-auto"
    style="background-image: url('/patterns/stardust.png')"
  >
    <div class="display-1 p-2">
      <a href="#top" title="Home">
        <i class="bounce fa fa-home my-3 mx-4 mx-md-4"></i>
      </a>

      <a href="/blog" title="Blog">
        <i class="fa fa-newspaper-o m-4"></i>
      </a>

      <a href="#contact" title="E-mail">
        <i class="fa fa-envelope m-4"></i>
      </a>

      <a href="//t.me/OgbeniHMMD" title="Telegram">
        <i class="fa fa-telegram m-4"></i>
      </a>

      <a href="//twitter.com/OgbeniHMMD" title="Twitter">
        <i class="fa fa-twitter m-4"></i>
      </a>

      <a href="//github.com/OgbeniHMMD" title="Github">
        <i class="fa fa-github m-4"></i>
      </a>
    </div>
  </div>
</template>


<style lang="scss"  >
.bounce {
  -webkit-animation: bounce 2s;
  animation: bounce 2s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

@-webkit-keyframes bounce {
  0%,
  25%,
  50%,
  75%,
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }
  60% {
    -webkit-transform: translateY(-12px);
    transform: translateY(-12px);
  }
}

@keyframes bounce {
  0%,
  25%,
  50%,
  75%,
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }
  60% {
    -webkit-transform: translateY(-12px);
    transform: translateY(-12px);
  }
}
</style>