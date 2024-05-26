<template>
  <div>
    <div class="album">
  <div class="responsive-container-block bg">
    <div class="responsive-container-block img-cont">
      <img class="img" src="https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/jawapos/2021/07/UMKM-Dery-Ridwansah-7.jpg">
      <img class="img" src="https://cdn.antaranews.com/cache/1200x800/2018/02/umkm.jpg">
      <img class="img img-last" src="https://media.telisik.id/assets/img/news/2020/10/rakyat_miskin_terus_bertambah_pemerintah_diminta_realisasikan_bantuan_umkm.jpg">
    </div>
    <div class="responsive-container-block img-cont">
      <img class="img img-big" src="https://i0.wp.com/umsu.ac.id/berita/wp-content/uploads/2024/01/panduan-mendapatkan-bantuan-sosial-ganti-rugi-untuk-petani-program-asuransi-usaha-tani-padi-autp.jpg?fit=700%2C467&ssl=1">
      <img class="img img-big img-last" src="https://cdn.antarafoto.com/cache/1200x797/2022/10/05/kerajinan-sangkar-burung-klaten-12ccl-dom.jpg">
    </div>
    <div class="responsive-container-block img-cont">
      <img class="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQERW2ZL8odby5WpiI3QP0CtV6RGBlhoWKC2n70Vytmhw&s">
      <img class="img" src="https://www.kaltimprov.go.id/upload/posting/28-10-2017-10-50-59-7615.JPG">
      <img class="img" src="https://www.jeparahariini.com/wp-content/uploads/2023/08/Kerajinan-Tenun-Troso-Warisan-Budaya-Khas-Jepara-yang-Eksotis-scaled.jpg">
    </div>
  </div>
</div>
  </div>
</template>

<script>
export default {
    name:"HomeGallery",
}
</script>

<style>
.album .responsive-container-block {
  min-height: 75px;
  height: fit-content;
  width: 100%;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 0px;
  margin-right: auto;
  margin-bottom: 0px;
  margin-left: auto;
  justify-content: flex-start;
}

.album .responsive-container-block.bg {
  max-width: 1320px;
  margin: 0 0 0 0;
  justify-content: space-between;
}

.album .img {
  width: 100%;
  margin: 0 0 20px 0;
}

.album #i9rb {
  color: black;
}

.album #ir6i {
  color: black;
}

.album #ikz3b {
  color: black;
}

.album .responsive-container-block.img-cont {
  flex-direction: column;
  max-width: 33.3%;
  min-height: auto;
  margin: 0 0 0 0;
  height: 100%;
}

.album #ipix {
  color: black;
}

.album #ipzoh {
  color: black;
}

.album #ig5q8 {
  color: black;
}

.album #imtzl {
  color: black;
}

.album #i53es {
  color: black;
}

.album .img.img-big {
  height: 50%;
  margin: 0 0 16px 0;
}

@media (max-width: 1024px) {
  .album .img {
    margin: 0 0 18px 0;
  }
}

@media (max-width: 768px) {
  .album .img {
    max-width: 32.5%;
    margin: 0 0 0 0;
  }

  .album .responsive-container-block.bg {
    flex-direction: column;
  }

  .album .responsive-container-block.img-cont {
    max-width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }

  .album .img.img-big {
    max-width: 49%;
    margin: 0 0 0 0;
  }
}

@media (max-width: 500px) {
  .album .img {
    max-width: 94%;
    margin: 0 0 25px 0;
  }

  .album .responsive-container-block.img-cont {
    flex-direction: column;
    align-items: center;
    padding: 10px 10px 10px 10px;
  }

  .album .img.img-big {
    max-width: 94%;
    margin: 0 0 25px 0;
  }

  .album .img.img-last {
    margin: 0 0 5px 0;
  }
}
</style>