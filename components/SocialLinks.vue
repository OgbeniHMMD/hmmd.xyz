<template>
  <div id="social">
    <div
      class="d-flex justify-content-center align-items-center min-vh-100 border-primary border-bottom text-center p-2 m-0 my-auto"
      style="background-image: url('/patterns/stardust.png')"
    >
      <div class="display-1">
        <div>
          <a href="/blog" title="Blog">
            <i class="fa fa-newspaper-o my-3 mx-4 ml-md-0"></i>
          </a>

          <a href="#contact" title="Email">
            <i class="fa fa-envelope my-3 mx-4"></i>
          </a>

          <a href="//t.me/OgbeniHMMD" title="Telegram">
            <i class="fa fa-telegram my-3 mx-4"></i>
          </a>

          <a href="//twitter.com/OgbeniHMMD" title="Twitter">
            <i class="fa fa-twitter my-3 mx-4"></i>
          </a>

          <a href="//github.com/OgbeniHMMD" title="Github">
            <i class="fa fa-github my-3 mx-4"></i>
          </a>

          <a href="#header" title="Jump Up">
            <i class="bounce fa fa-chevron-up my-3 mx-4 mr-md-0"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
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