<template>
  <div>
    <div class="T_header clearFix">
      <div class="logo">
        <img src="../../images/logo.png" alt="">
      </div>
      <div class="header_list">
        <router-link v-for="(item,index) in list" key="index" :to= "item.link" class="header_btn" @click.native="addClass(index)" :class="{active:avtiveAdd==index}">{{item.name}}</router-link>
      </div>
      <div class="login">
          <h5>登录/注册</h5>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
      data(){
        return {
          list:[{name:"首页",link:"/"},{name:"管理洞察",link:"/body/look"},{name:"管理舆情",link:"/yuq"},{name:"管理风控",link:"/fko"},{name:"管理环境",link:"/huj"}],
           avtiveAdd:0
        }
      },
      methods:{
        addClass(index){
           this.avtiveAdd = index;
        }
      }
  }
</script>

<style lang="scss">
  .T_header{
    width:100%;
    height: 60px;
    background-color: #355699;
    position: relative;
    .logo{
      float: left;
      width:250px;
      height:45px;
      line-height: 60px;
      text-align: center;
      padding-top: 8px;
      img{
        width: 100px;
        height:30px;
        display: inline-block;
      }
    }
    .login{
      position: absolute;
      top: 20px;
      right: 70px;
      color: #FFF;
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
        cursor: pointer;
        &.active{
          background-color: #263967;
        }
      }
      .header_btn:hover{
        background-color: #2a3f71;
      }
    }
  }



</style>
