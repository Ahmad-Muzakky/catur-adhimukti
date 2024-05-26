<template>
  <div class="d-flex">
    <div style="width: 60%;">
      <iframe width="100%" height="400" src="https://www.youtube.com/embed/7b2Nbr34BW4?si=2pc3oGpA9xtmAGrM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <div class="mt-2">
        <h2><b>Video Title</b></h2>
        <p class="text-justify"><b>Description : <br></b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies maximus ullamcorper. Phasellus elementum tristique ipsum vel faucibus. Morbi tincidunt magna in risus posuere, sed pulvinar felis facilisis. Mauris urna magna, ultricies quis hendrerit et, mollis in sem. Etiam tempor ipsum eu aliquet blandit. Nulla fringilla enim in erat hendrerit fringilla. Cras fermentum justo id faucibus elementum. Morbi tellus purus, blandit quis maximus in, iaculis non arcu. Cras consectetur metus nisl, eu vestibulum magna laoreet et. Sed quis sodales felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed fringilla lorem ut turpis ultricies, id porttitor augue vestibulum. Integer congue placerat odio, eget finibus risus egestas eget. Proin ligula elit, bibendum vel mattis sit amet, molestie sed massa.
        </p>
      </div>
    </div>
    <div class="ml-2 h-100" style="width: 40%;">
      <div class="p-3 text-white rounded-top rounded-bottom" style="background-color:#34364a" >
          <h4><b>Playlist Video </b></h4>
          <div v-for="index in 8" :key="index" style="color:#34364a" class="mt-2 bg-light w-100 d-flex align-items-center border rounded-pill p-2">
            <i class='bx bx-play border border-10 bx-border-circle bx-sm' style="background-color:#34364a;color:white"></i>
            <div class="ml-3">
              <h5><b>Video Title {{ index }}</b></h5>
              <span>15 minute</span>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"HomeClass",
    data(){
      return{
      }
    },
    mounted(){
    },
}
</script>

<style>
</style>