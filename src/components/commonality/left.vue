<template>
    <div class="body_left">
      <h3 class="text-center body_left_title">管理洞察</h3>
      <a class="body_left_data" href="javascript:;">数据大屏</a>
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="产品选择" name="1" class="body_left_el">
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
    .body_left_title{
      background-color: #FFF;
      line-height: 50px;  
      color: #FFF;
      background-color: #2d7662; 
    }
    .body_left_data{
      display: block;
      text-align: center; 
      line-height: 50px; 
      background-color: #FFF;  
      color: #355699; 
    }
    position: absolute;
    left: 25px;
    top: 0;  
    width: 150px;
    .el-collapse{
      border: 0;
      .el-collapse-item__content{
        background-color: #FFF; 
        text-align: center;
        line-height: 40px; 
        padding: 0;
      }
    }
      .body_left_el{
        .el-collapse-item__header{
          .el-icon-arrow-right:before{
            content: ""; 
          }
          .el-collapse-item__header__arrow{
            margin: 0;
          }
          text-align: center;
          padding-left: 0;
          font-size: 16px;    
        }
        a{
          display: block;
          color: #666666;  
          &:hover{
            background-color: #2d7662;
            color: #fff;   
          }
        } 
    }
  }
  
</style>