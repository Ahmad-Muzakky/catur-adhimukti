<template>
  <div class="home">
    <NavBar />
    <div id="container">
<div class="header">
      <h1>
        <b>
        TRANSFORMING MSMES<br> 
        FOR BETTER FUTURE</b>
      </h1>
    </div>
    <HomeStory/>
    <Member/>
    </div>
        <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeStory from '@/components/HomePage/HomeStory.vue';
import Member from '@/components/HomePage/Member.vue';
import NavBar from '@/views/Navbar.vue';
import Footer from '@/views/FooterView.vue';

export default {
  name: 'HomeView',
  components: {
    HomeStory,
    Member,
        NavBar,
    Footer,
  }
}
</script>

<style>
.header {
  background: url(https://wahananews.co/photo/berita/dir112022/umkm-berperan-penting-selamatkan-ekonomi-indonesia_vz34YndSog.jpg) no-repeat;
  font-size: 14px;
  height: 392px;
  color:white;
  margin-bottom: 60px;
}
.header h1 {
  position: relative;
  top: 50px;
  left: 300px;
  font-size: 4em;
  text-shadow: 2px 2px black;
}
#container{
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}
</style>
