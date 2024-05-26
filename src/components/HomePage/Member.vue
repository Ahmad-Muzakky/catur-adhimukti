<template>
  <div class="MemberTeam">
    <h1>Our Team</h1>
    <div class="d-flex justify-content-between">
    <div class="card" style="width: 18rem;" v-for="index in 3" :key="index">
      <img class="card-img-top" src="https://static.vecteezy.com/system/resources/previews/004/274/186/original/person-icon-user-interface-icon-silhouette-of-man-simple-symbol-a-glyph-symbol-in-your-web-site-design-logo-app-ui-webinar-video-chat-ect-vector.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">John Doe</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
name:'MemberTeam',
}
</script>

<style>

</style>