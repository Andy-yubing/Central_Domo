<template>
    <div class="body_left">
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="管理洞察" name="1" class="body_left_el">
             <router-link to="/body/look">产业全景</router-link>
             <router-link to="/body/layout">产业布局</router-link>
             <router-link to="/body/policy">产业政策</router-link>
             <router-link to="/body/diagnose">产业诊断</router-link>
             <router-link to="/body/report">产业报告</router-link>
        </el-collapse-item>
        <el-collapse-item title="HR管理" name="2" class="body_left_el">
            <router-link to="/body/fuseki">企业对标</router-link>
            <router-link to="/body/Search">企业智搜</router-link>
        </el-collapse-item>
        <el-collapse-item title="企业聚焦" name="3" class="body_left_el">
            <router-link to="/body/obor">一带一路</router-link>
            <router-link to="/body/environment">政策环境</router-link>
            <router-link to="/body/message">热点信息</router-link>
        </el-collapse-item>
      </el-collapse>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        activeNames: ['1']
      };
    },
    methods:{
      handleChange(){

      }
    }
  }
</script>

<style lang="scss">
  .body_left{
      .body_left_el{
      width: 200px; 
        a{
          display: block;
          color: #666666;  
        }
    }
  }
  
</style>