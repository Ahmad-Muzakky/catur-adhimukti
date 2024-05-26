<template>
  <div class="ClassView">
    <NavBar />
    <HomeClass id="container"/>
        <Footer />
  </div>
</template>

<script>
import HomeClass from '@/components/Class/HomeClass.vue';
import NavBar from '@/views/Navbar.vue';
import Footer from '@/views/FooterView.vue';

export default {
  name:'ClassView',
  components:{
    HomeClass,
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