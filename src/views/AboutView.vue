<template>
  <div class="ClassView">
    <NavBar />
    <AboutContent id="container"/>
    <Footer />
  </div>
</template>

<script>
import AboutContent from '@/components/AboutUs/AboutContent.vue';
import NavBar from '@/views/Navbar.vue';
import Footer from '@/views/FooterView.vue';

export default {
  name:'ClassView',
  components:{
    AboutContent,
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