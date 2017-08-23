<template>
    <div>
     <T_Header></T_Header>
    <!--  <div class="content">index_content</div> -->
     <Left></Left>
     <router-view></router-view>
     <T_Footer></T_Footer>
    </div>
</template>

<script>
  import T_Header from "./main/T_header.vue";
  import T_Footer from "./main/T_footer.vue";
  import left from "./main/left.vue";
  export default {
    components:{
      T_Header:T_Header,
      T_Footer:T_Footer,
      Left:left,
    }
  }
</script>

<style lang="scss">
  body{
    .content{
      width: 100%;
      height: 800px;
    }
  }

</style>
