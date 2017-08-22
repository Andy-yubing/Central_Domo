<template>
    <div>
    <Header></Header>
     <div class="content">index_content</div>
    <router-view></router-view>
    <Footer></Footer>
    </div>
</template>

<script>

  import Header from "./main/header.vue"
  import Footer from "./main/footer.vue"
  export default {
    components:{
      Header:Header,
      Footer:Footer,
    }
  }
</script>

<style>
  .content{
    width: 100%;
    height: 800px;
    background-color: #D2D2D2;
  }
</style>
