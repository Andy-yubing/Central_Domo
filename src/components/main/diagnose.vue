<template>
    <div class="warPer clearFix">
      <div class="wbg">
        <span>企业诊断</span>
        <div class="R_box">
          <el-button type="primary">导出</el-button>
          <el-button type="primary" @click="dialogTableVisible = true">产业设置</el-button>
          <el-dialog title="选择企业产业组合"
                     :visible.sync="dialogTableVisible"
                     size="large">
            <div>
              <div class="bottom_line">
                <span class="big_text">选择地区</span>
                <div class="R_box">
                  <el-button type="primary" @click="dialogTableVisible = false" class="G_bg">下载产业模板</el-button>
                  <el-button type="primary" @click="dialogTableVisible = false" class="G_bg">提交产业模板</el-button>
                </div>
              </div>
              <ul class="area clearFix">
                <a href="javascript:;" v-for="(area,index) in areas">
                  <li  @click="addClass(index)" :class="{active:oneCode==index}">{{area}}</li>
                </a>
              </ul>
              <div class="bottom_line">
                <span class="big_text">产业利润</span>
              </div>
              <div>
                <div class="list">
                  <div class="F_box">
                    <span class="sp_box">城投</span>
                    <input type="text" class="Ip_box" placeholder="输入年份">&nbsp;年&nbsp;
                    <input type="text" class="Ip_box" placeholder="输入当前利润">&nbsp;万元&nbsp;
                  </div>
                  <div class="F_box">
                    <span class="sp_box">旅游</span>
                    <input type="text" class="Ip_box" placeholder="输入年份">&nbsp;年&nbsp;
                    <input type="text" class="Ip_box" placeholder="输入当前利润">&nbsp;万元&nbsp;
                  </div>
                  <div class="F_box">
                    <span class="sp_box">石油化工</span>
                    <input type="text" class="Ip_box" placeholder="输入年份">&nbsp;年
                    <input type="text" class="Ip_box" placeholder="输入当前利润">&nbsp;万元
                  </div>
                </div>
                <div class="list">
                  <div class="F_box">
                    <span class="sp_box">电子</span>
                    <input type="text" class="Ip_box" placeholder="输入年份">&nbsp;年
                    <input type="text" class="Ip_box" placeholder="输入当前利润">&nbsp;万元
                  </div>
                  <div class="F_box">
                    <span class="sp_box">投资</span>
                    <input type="text" class="Ip_box" placeholder="输入年份">&nbsp;年
                    <input type="text" class="Ip_box" placeholder="输入当前利润">&nbsp;万元
                  </div>
                  <div class="F_box">
                    <span class="sp_box">建筑工程</span>
                    <input type="text" class="Ip_box" placeholder="输入年份">&nbsp;年
                    <input type="text" class="Ip_box" placeholder="输入当前利润">&nbsp;万元
                  </div>
                </div>
              </div>
              <div class="bottom_line">
                <span class="big_text">当前成本</span>
              </div>
              <div>
                <div class="list">
                  <div class="F_box">
                    <span class="sp_box">城投</span>
                    <input type="text" class="Ip_box" placeholder="输入当前利润">&nbsp;万元
                  </div>
                  <div class="F_box">
                    <span class="sp_box">旅游</span>
                    <input type="text" class="Ip_box" placeholder="输入当前利润">&nbsp;万元
                  </div>
                  <div class="F_box">
                    <span class="sp_box">石油化工</span>
                    <input type="text" class="Ip_box" placeholder="输入当前利润">&nbsp;万元
                  </div>
                </div>
                <div class="list">
                  <div class="F_box">
                    <span class="sp_box">电子</span>
                    <input type="text" class="Ip_box" placeholder="输入当前利润">&nbsp;万元
                  </div>
                  <div class="F_box">
                    <span class="sp_box">投资</span>
                    <input type="text" class="Ip_box" placeholder="输入当前利润">&nbsp;万元
                  </div>
                  <div class="F_box">
                    <span class="sp_box">建筑工程</span>
                    <input type="text" class="Ip_box" placeholder="输入当前利润">&nbsp;万元
                  </div>
                </div>
              </div>
            </div>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogTableVisible = false" class="G_bg">取 消</el-button>
              <el-button type="primary" @click="dialogTableVisible = false" class="G_bg">提交并开始诊断</el-button>
            </div>
          </el-dialog>
        </div>
      </div>
      <div class="wbg hasBottom">
        <div class=" bottom_line">
          <span>产业组合平滑曲线</span>
          <!--<div class="create_btn">
            <a href="javascript:;">生成平滑曲线</a>
          </div>-->
        </div>
        <div id="main" class="center_box" style="width: 1000px;height:450px;"></div>
      </div>
      <div class="wbg">
        产业占比
        <div class="list">
          <div class="F_box">
              <span class="sp_box">城投</span>
              <input type="text" class="Ip_box" value="20%">
            </div>
          <div class="F_box">
            <span class="sp_box">旅游</span>
            <input type="text" class="Ip_box" value="20%">
          </div>
          <div class="F_box">
            <span class="sp_box">石油化工</span>
            <input type="text" class="Ip_box" value="20%">
          </div>
        </div>
        <div class="list">
          <div class="F_box">
            <span class="sp_box">电子</span>
            <input type="text" class="Ip_box" value="20%">
          </div>
          <div class="F_box">
            <span class="sp_box">建筑工程</span>
            <input type="text" class="Ip_box" value="20%">
          </div>
          <div class="F_box">
            <span class="sp_box">投资</span>
            <input type="text" class="Ip_box" value="20%">
          </div>
        </div>
        <div class="text-center">
          <div class="Bto_btn">诊断处方</div>
          <div class="Bto_btn">产业平滑曲线样例</div>
        </div>
        <ul class="con_box">
          <li>三个产业具有不同的利润率和成长周期，物流的利润率最低、波动幅度最小，城投的利润率最高、波动幅度最大。 三个产业进行组合，将产业</li>
          <li>三个产业进行组合，将产业进行叠加，形成一条平滑的波动曲线，即企业的收益曲线，则企业规避了单个产业利润率降低的风险，得到了收益的持续增长.</li>
        </ul>
      </div>
    </div>
</template>

<script>

  import echarts from 'echarts'
    export default {
      mounted(){
        var myChart = echarts.init(document.getElementById('main'));
        var option = {
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data:['生成平滑曲线'],
            selected: {
              '生成平滑曲线' : false,
            },
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: true,
            data: ['0','5','10','15','20','25','30']
          },
          yAxis: {
            type: 'value',

          },
          series: [
            {
              name:'城投',
              type:'line',
              stack: '总量',
              smooth: true,
              data:[120, 132, 300, 134, 90, 200, 210]
            },
            {
              name:'物流',
              type:'line',
              stack: '总量',
              smooth: true,
              data:[220, 182, 300, 200, 290, 200, 310]
            },
            {
              name:'旅游',
              type:'line',
              stack: '总量',
              smooth: true,
              data:[150, 200, 201, 154, 190, 200, 200]
            },
            {
              name:'生成平滑曲线',
              type:'line',
              stack: '总量',
              smooth: true,
              lineStyle:{
                normal: {
                  color: '#607615',
                },
              },
              data:[300, 320, 330, 334, 400, 360, 300]
            }
          ]
        };
        myChart.setOption(option);
      },
      data() {
        return {
          areas:[
            '城投','物流','旅游','建筑工程','公用事业','电子','军工','投资','新能源','TMT',
            '农业','机械','矿业','建材','科研','金融','冶金','房地产','现代服务','煤炭'
          ],
          oneCode:0,
          dialogTableVisible: false,
          dialogFormVisible: false,
          formLabelWidth: '120px'
        };
      },
      methods:{
        addClass(index){
          this.oneCode = index
        },
      }
    }
</script>

<style lang="scss">
  .area{
    width: 100%;
    li{
      float: left;
      margin: 10px 20px;
      width: 80px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      border-radius: 10px;
    }
    a{
      color: black;
    }
    .block{
      padding-top: 5px;
    }
  }

  .active{
    background-color: #2d7662;
    color: white;
  }
  .create_btn{
    width: 120px;
    height: 40px;
    background-color: #2d7662;
    border-radius: 5px;
    line-height: 40px;
    text-align: center;
    display: inline-block;
    margin-left: 20px;
  }
  .list{
    height: 50px;
    width: 100%;
    background-color: #f1f4fc;
    margin-top: 20px;
    margin-bottom: 50px;
    .F_box{
      text-align: center;
      width: 33.33%;
      height:100%;
      line-height: 50px;
      float: left;
      .Ip_box{
        display: inline-block;
        width: 100px;
        height: 30px;
        border: 1px solid #2d7662;
        border-radius: 5px;
      }
      .sp_box{
        display: inline-block;
        width: 80px;
        height: 32px;
        background-color: #2d7662;
        border-radius: 5px;
        line-height: 30px;
        text-align: center;
        color: white;
      }
    }
  }
.Bto_btn{
  height: 35px;
  display: inline-block;
  padding: 0 5px;
  color: white;
  text-align: center;
  line-height: 35px;
  background-color: #2d7662;
  border-radius: 5px;
  margin: 50px 20px;
}
  .con_box li{
    list-style: disc;
    line-height: 30px;
    font-size: 12px;
  }

  </style>
