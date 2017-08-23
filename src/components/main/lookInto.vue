<template>
  <div>
    <!-- <Header></Header> -->
    <div class="content">
    <!--   <div class="left_btn">
      <div class="look_tittle">管理洞察</div>
      <ul>
        <li class="big_tittle">产业选择</li>
        <router-link to="/look">
          <li>产业全景</li>
        </router-link>
        <router-link to="/look/layout">
          <li>产业布局</li>
        </router-link>
        <router-link to="/look/policy">
          <li>产业政策</li>
        </router-link>
        <router-link to="/look/diagnose">
          <li>产业诊断</li>
        </router-link>
        <router-link to="/look/report">
          <li>产业报告</li>
        </router-link>
      </ul>
      <ul>
        <li class="big_tittle">HR管理</li>
        <router-link to="/look/fuseki">
          <li>企业对标</li>
        </router-link>
        <router-link to="/look/Search">
          <li>企业智搜</li>
        </router-link>
      </ul>
      <ul>
        <li class="big_tittle">企业聚焦</li>
        <router-link to="/look/obor">
          <li>一带一路</li>
        </router-link>
        <router-link to="/look/environment">
          <li>政策环境</li>
        </router-link>
        <router-link to="/look/message">
          <li>热点信息</li>
        </router-link>
      </ul>
    </div> -->
      <div class="look_content">
        <router-view></router-view>
      </div>
    </div>
    
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
 /* import Header from "../main/header.vue"
  import Footer from "../main/footer.vue"
  export default {
    components:{
      Header:Header,
      Footer:Footer,
    }
  }*/
</script>

<style>
  .content{
    width: 100%;
    overflow: hidden;
  }
  .left_btn {
    float: left;
    width: 15%;
    height: 500px;
    background-color: #fff;
    text-align: center;
    margin-right: 2%;
  }
  .left_btn a{
    color: black;
  }
  .look_content{
    width: 80%;
    float: left ;
  }
  .look_tittle{
    width:100%;
    height: 50px;
    background-color: green;
    line-height: 50px;
    color: white;

  }

  .big_tittle{
    font-size: 18px;
    font-weight: bold;
  }
</style>
