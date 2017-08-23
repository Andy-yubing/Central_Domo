<template>
  <div>
    <div class="T_header clearFix">
      <div class="logo">
        <img src="../../images/logo.png" alt="">
      </div>
      <div class="header_list">
        <router-link to="/" class="header_btn">首页</router-link>
        <router-link to="/body/look" class="header_btn">管理洞察</router-link>
        <router-link to="/look" class="header_btn">管理舆情</router-link>
        <router-link to="/look" class="header_btn">管理风控</router-link>
        <router-link to="/look" class="header_btn">管理环境</router-link>
      </div>
      <div class="login">
        <img src="../../images/login.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  .T_header{
    width:100%;
    height: 60px;
    background-color: #355699;
    margin-bottom: 20px;
    position: relative;
    .logo{
      float: left;
      width:250px;
      height:45px;
      line-height: 60px;
      text-align: center;
      padding-top: 5px;
      img{
        width: 115px;
        height:30px;
        display: inline-block;
      }
    }
    .login{
      position: absolute;
      top: 20px;
      right: 70px;
      width: 20px;
      height: 20px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .header_list{
      float: left;
      width:70%;
      height:100%;
      background-color: #355699;
      margin: 0 auto;
      .header_btn{
        display: inline-block;
        width:19%;
        text-align: center;
        line-height: 60px;
        font-size: 12px;
        color: #FFF; 
      }
      .header_btn:hover{
        background-color: #2a3f71;
      }
    }
  }



</style>
