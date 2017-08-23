<template>
    <div>
      <div class="header">
        <div class="header_list">
          <router-link to="/" class="header_btn">首页</router-link>
          <router-link to="/body/look" class="header_btn">管理洞察</router-link>
          <router-link to="/body/look" class="header_btn">管理舆情</router-link>
          <router-link to="/body/look" class="header_btn">管理风控</router-link>
          <router-link to="/body/look" class="header_btn">管理环境</router-link>
        </div>
      </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
  .header{
    width:100%;
    height: 50px;
    background-color: red;
    margin-bottom: 20px;
  }
  .header_list{
    width:70%;
    height:100%;
    background-color: green;
    margin: 0 auto;
  }
  .header_btn{
    display: inline-block;
    width:19%;
    text-align: center;
    line-height: 50px;
  }
  .header_btn:hover{
    background-color: #005D00;
  }

</style>
