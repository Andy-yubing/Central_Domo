<template>
  <div>
  <Header></Header>
    <div class="content">
      <div class="left_btn">
        <div class="look_tittle">管理洞察</div>
        <ul>
          <li>产业选择</li>
          <li>产业布局</li>
          <li>产业政策</li>
          <li>产业诊断</li>
          <li>产业报告</li>
        </ul> 
        <ul>
          <li>HR管理</li>
          <li>企业对标</li>
          <li>企业智搜</li>
        </ul>
        <ul>
          <li>企业聚焦</li>
          <li>一带一路</li>
          <li>政策环境</li>
          <li>热点信息</li>
        </ul>
      </div>
    </div>
  <Footer></Footer>
</div>
</template>

<script>
  import Header from "../main/header.vue"
  import Footer from "../main/footer.vue"
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
  .left_btn{
    width: 200px;
    height: 500px;
    background-color: #fff;
    text-align: center;
  }
  .look_tittle{
    width:100%;
    height: 50px;
    background-color: green;
    line-height: 50px;
    color: white;
  }
</style>
