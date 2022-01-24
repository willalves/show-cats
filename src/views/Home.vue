<template>
  <div class="page home">
    <div class="wrapper">
      <div class="header">
        <!-- Background image -->
        <div class="img-wrapper">
            <img src="@/assets/images/banner-home.jpg" alt="Banner Home">
        </div>
        <!-- Text intro -->
        <div class="banner">
          <h1>Show cats | Made with VueJS</h1>
          <p class="intro main">Hello there! I've created this website to show you a bit of my skills with VueJS.</p>
          <p class="intro second">But not just that, the real deal is actually to show you some of the cutest cats on <a href="https://thecatapi.com/" target="_blank" class="underline text-white hover:no-underline">the cat API</a>.</p>
          <p class="intro third">Go on and check it out on the cats page !</p>
          <div class="btn mt-8">
            <router-link
              to="/cats"
              class="text-white uppercase tracking-widest py-4 px-12 border-2 rounded-full font-bold cursor-pointer transition bg-indigo-700 border-indigo-700 hover:border-white hover:bg-transparent"
            >
              See cats
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>