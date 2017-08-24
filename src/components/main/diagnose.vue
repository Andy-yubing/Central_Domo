<template>
    <div class="warPer">
      <div class="wbg">
        企业诊断
      </div>
      <div class="wbg bottom_line">
        <span>产业组合平滑曲线</span>
        <!--<div class="create_btn">
          <a href="javascript:;">生成平滑曲线</a>
        </div>-->
      </div>
      <div class="W_bg hasBottom">
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
            data:['生成平滑曲线']
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
              name:'邮件营销',
              type:'line',
              stack: '总量',
              data:[120, 132, 1101, 134, 90, 1230, 210]
            },
            {
              name:'联盟广告',
              type:'line',
              stack: '总量',
              data:[220, 182, 1191, 1234, 290, 330, 310]
            },
            {
              name:'视频广告',
              type:'line',
              stack: '总量',
              data:[150, 1232, 201, 154, 190, 330, 410]
            },
            {
              name:'直接访问',
              type:'line',
              stack: '总量',
              data:[320, 332, 301, 334, 390, 1330, 320]
            },
            {
              name:'生成平滑曲线',
              type:'line',
              stack: '总量',
              data:[820, 932, 950, 980, 1290, 1330, 1800]
            }
          ]
        };
        myChart.setOption(option);
      }
    }
</script>

<style lang="scss">
  .warPer{
    width: 1200px;
    float: left;
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
        width: 80px;
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
