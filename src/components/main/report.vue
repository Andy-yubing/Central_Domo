<template>
  <div class="warPer">
    <div class="wbg_up">
      <div class="wbg update">
        <a href="javascript:;" @click="dialogVisible = true">
            <img src="../../images/update.png" alt="" >
          </a>
      </div>
    </div>
    <el-dialog class="text-center" title="生成报告" :visible.sync="dialogVisible" size="tiny" :before-close="handleClose">
          <div class="handleClose_top">
              <label class="handleClose_top_left">报告名称: <el-input  placeholder="请输入内容"></el-input></label>
              <label>
                    <el-date-picker
                      v-model="value1"
                      type="date"
                      placeholder="选择日期"
                      :picker-options="pickerOptions0">
                    </el-date-picker>
              </label>
          </div>
          <div>
            <h5>选择产业组合</h5>
            <ul class="clearFix group">
              <li v-for="item in list">{{item}}</li>
            </ul>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogVisible: true,
      pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        value1: '',
        list:["物流","旅游","建筑工程","公用事业","电子","军工","农业","现代服务","煤炭","化工","建材","科研","金融"]
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },

  }
}

</script>
<style lang="scss">
.wbg_up {
  width: 100%;
  background-color: white;
  height: 600px;
}

.update {
  width: 260px;
  height: 250px;
  a {
    img {
      width: 100%;
      height: 100%;
      border-radius: 8px;
    }
    img:hover {
      box-shadow: 10px 10px 5px #888888;
      ;
    }
  }
}
.el-dialog--tiny{
  width: 50%; 
}
.handleClose_top{
  display: flex;
  -webkit-display: flex;
  -webkit-justify-content: space-between; 
   justify-content: space-between;  
   label{
     width: 45%; 
   }
   border-top: 1px solid #eeeeee;
   padding-top: 20px;  
}
.handleClose_top_left{
  .el-input{
    display: inline-block;
    width: 65%; 
  }
}
</style>
