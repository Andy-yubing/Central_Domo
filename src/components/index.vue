<template>
    <div>
       <left></left>
       <router-view></router-view>
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
    background-color: white;
    .content{
      width: 100%;
      height: 800px;
      background-color: #D2D2D2;
    }
  }
</style>
