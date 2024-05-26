<template>
  <div id="navbar">
  <div class="navbar p-0 shadow-lg p-3 mb-5 bg-white rounded">
<nav class="navbar navbar-expand-lg navbar-light w-100 d-flex justify-content-between">
  <div class="d-flex align-items-center">
  <img class="ml-5" src="../assets/Capture2.jpg" alt="404 Logo" width="60" height="60">
  <h3 class="font-weight-bold ">PT. Catur Adhimukti</h3>
</div>
  <div>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active mr-3">
        <a class="nav-link font-weight-bold"><router-link class="text-dark" to="/">Home</router-link> <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item mr-3">
        <a class="nav-link font-weight-bold"><router-link class="text-dark" to="/class">Our Class</router-link></a>
      </li>
      <li class="nav-item mr-3">
        <a class="nav-link font-weight-bold"><router-link class="text-dark" to="/gallery">Gallery</router-link></a>
      </li>
      <li class="nav-item mr-3">
        <a class="nav-link font-weight-bold"><router-link class="text-dark" to="/about">About Us</router-link></a>
      </li>
    </ul>
  </div>
  </div>
  <div>
      <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
    <ul class="navbar-nav d-flex justify-content-between text-center">
      <li class="nav-item active mr-3 ">
        <a class="nav-link font-weight-bold"><router-link class="text-dark" to="/">Sign In</router-link> <span class="sr-only">(current)</span></a>
      </li>
      <li>
        <h3 class="font-weight-bold text-dark">|</h3>
      </li>
      <li class="nav-item mr-3">
        <a class="nav-link font-weight-bold"><router-link class="text-dark" to="/class">Register</router-link></a>
      </li>
    </ul>
  </div>
  </div>
</nav>
  </div>
  </div>
</template>

<script>

export default {
  name: 'NavBar'
}
</script>

<style>

</style>
