<template>
  <div class="GalleryView">
    <NavBar />
    <GalleryClass id="container"/>
        <Footer />
  </div>
</template>

<script>
import GalleryClass from '@/components/Gallery/HomeGallery.vue';
import NavBar from '@/views/Navbar.vue';
import Footer from '@/views/FooterView.vue';

export default {
  name:'GalleryView',
  components:{
    GalleryClass,
        NavBar,
    Footer,
  }
}
</script>

<style>
#container{
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}
</style>