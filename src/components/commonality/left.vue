<template>
    <div>
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="一致性 Consistency" name="1">
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        </el-collapse-item>
        <el-collapse-item title="反馈 Feedback" name="2">
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </el-collapse-item>
        <el-collapse-item title="效率 Efficiency" name="3">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </el-collapse-item>
        <el-collapse-item title="可控 Controllability" name="4">
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </el-collapse-item>
      </el-collapse>
      
       <!--  <div class="left_btn">
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