<template>
    <div class="content">
       <left></left>
       <router-view class="content_right"></router-view>
       <foot></foot>
    </div>
</template>
<script>
  import footer from "./commonality/footer.vue";
  import left from "./commonality/left.vue";
  export default {
    components:{
      foot:footer,
      left:left,
    }
  }
</script>

<style lang="scss">
  body{
    .content{
      width: 100%;
      height: 800px;
      padding-left: 200px; 
      position: relative;
      .content_right{
        background-color: #fff; 
      }
    }
  }
</style>
