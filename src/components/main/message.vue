<template>
    <div>
      <search></search>
      <div class="wbg">
        <div class="first_tittle">
          <p>筛选设置:</p>
        </div>
        <div class="clearFix warPer">
           <div class="left_box">选择产业：</div>
           <div class="right_check">
             <el-checkbox-group
               v-model="checkedCities1"
               :min="1"
               :max="10">
               <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
             </el-checkbox-group>
           </div>
        </div>
      </div>
    </div>
</template>

<script>
  import Vue from 'vue'
  import Element from 'element-ui'
  Vue.use(Element)

  import search from '../commonality/search_box.vue'

  const cityOptions = ['城投', '物流', '旅游', '建筑工程','公用事业','电子', '石油化工', '房地产','现代服务', '机械','矿业'];
  export default {
    data() {
      return {
        checkedCities1: [''],
        cities: cityOptions
      };
    },
      components:{
        search : search
      }
  }
</script>

<style scoped>
  .left_box{
    float: left;
    margin-right: 20px;
  }
  .right_check{
    float: left;
    width:90%;
  }
  .first_tittle{
    height: 50px;
    width: 100%;
    border-bottom: 2px solid #999;
    line-height: 50px;
    margin-bottom: 20px;
  }

</style>
