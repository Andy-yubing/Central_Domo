<template>
  <div class="search wbg">
    <input type="text" placeholder="请输入搜索内容" class="search_box">
    <div class="search_btn"><a href="javascript:;">搜索</a></div>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
  .search{
    line-height: 80px;
  }
  .search_box{
    display: inline-block;
    width:70%;
    height: 42px;
    border: 1px solid #999;
    margin-left: 100px;
  }
  .search_btn{
    display: inline-block;
    width: 100px;
    height: 44px;
    background-color: green;
    line-height: 40px;
    text-align: center;
  }
  .search_btn a{
    color: white;
  }
</style>
