<template>
    <div>
      <div class="wbg">
        <span>对标企业:</span>
        <span class="corp">淘宝科技有限空司</span> VS <span class="corp">腾讯科技有限公司</span>
        <span class="down g_btn">下载</span>
        <div class="text">最多只能选三家企业对标，更多请开通套餐</div>
      </div>
      <div class="wbg">
        <span>对标类型:</span>
        <a href="javascript:;"
           class="g_btn"
           v-for="(tittle,index) in tittles"
           @click="addClass(index)"
           :class="{active1:oneCode==index}"
        >{{tittle}}
        </a>
      </div>
      <div  class="x_tu">
        <div id="tu1" style="width: 100%;height:300px;"></div>
      </div>
      <div  class="x_tu">
        <div id="tu2" style="width: 100%;height:300px;"></div>
      </div>
      <div  class="x_tu">
        <div id="tu3" style="width: 100%;height:300px;"></div>
      </div>
      <div  class="x_tu">
        <div id="tu4" style="width: 100%;height:300px;"></div>
      </div>
      <div  class="d_tu">
        <div id="tu5" class="center_tu" style="width: 70%;height:300px;"></div>
      </div>

    </div>
</template>

<script>
    import echarts from 'echarts'
    export default {
      data(){
        return{
          tittles:['人员结构','组织结构','员工效率'],
          oneCode:0,
        }
      },
      methods:{
        addClass(index){
          this.oneCode = index
        }
      },
      mounted(){
        var myChart = echarts.init(document.getElementById('tu1'));
        var option = {
          title: {
            text: '年龄分布对比'
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          tooltip : {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          xAxis : [
            {
              type : 'category',
              boundaryGap : false,
              data : ['0-10岁','10-20岁','20-30岁','30-40岁','40-50岁','50-60岁','60-70岁']
            }
          ],
          yAxis : [
            {
              type : 'value'
            }
          ],
          series : [
            {
              name:'人数',
              type:'line',
              stack: '总量',
              smooth: true,
              areaStyle: {
                normal: {
                color:'#badcf6'
              }},
              lineStyle: {
                normal: {
                  color:'#badcf6'
                }},
              data:[120, 132, 101, 134, 90, 230, 210]
            }
          ]
        };
        myChart.setOption(option);

        var myChart2 = echarts.init(document.getElementById('tu2'));
        var option2 = {
          title: {
            text: '管理层级对比'
          },
          color: ['#b5e4e6'],
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis : [
            {
              type : 'category',
              data : ['高层管理', '中层管理', '一般员工'],
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          yAxis : [
            {
              type : 'value'
            }
          ],
          series : [
            {
              name:'直接访问',
              type:'bar',
              barWidth: '60%',
              data:[10, 52, 200]
            }
          ]
        };
        myChart2.setOption(option2);

        var tu3 = echarts.init(document.getElementById('tu3'));
        var op_tu3 = {
          title: {
            text: '学历分布对比'
          },
          legend: {
            right:20,
            data: ['中材集团']
          },
          color: ['#3398DB'],
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis : [
            {
              type : 'category',
              data : ['博士', '研究生', '本科', '大专'],
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          yAxis : [
            {
              type : 'value'
            }
          ],
          series : [
            {
              name:'中材集团',
              type:'bar',
              barWidth: '60%',
              data:[10, 52, 200, 334]
            }
          ]
        };
        tu3.setOption(op_tu3);

        var tu4 = echarts.init(document.getElementById('tu4'));
        var op_tu4 = option = {
          title: {
            text: '岗位结构对比'
          },
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          legend: {
            right:20,
            data: ['管理','销售','策划','投资开放','设计']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis:  {
            type: 'value'
          },
          yAxis: {
            type: 'category',
            data: ['淘宝']
          },
          series: [
            {
              name: '管理',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data: [320]
            },
            {
              name: '销售',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data: [120]
            },
            {
              name: '策划',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data: [220]
            },
            {
              name: '投资开放',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data: [150]
            },
            {
              name: '设计',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data: [820]
            }
          ]
        };
        tu4.setOption(op_tu4);

        var tu5 = echarts.init(document.getElementById('tu5'));
        var op_tu5 = {
          title: {
            text: '职称分布对比'
          },
          legend: {
            right:20,
            data: ['职称分布']
          },
          color: ['#3398DB'],
          center:[10,50],
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis : [
            {
              type : 'category',
              data : ['专家职称', '高级职称', '中级职称', '无职称'],
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          yAxis : [
            {
              type : 'value'
            }
          ],
          series : [
            {
              name:'职称分布',
              type:'bar',
              barWidth: '60%',
              data:[10, 52, 200, 334]
            }
          ]
        };

        tu5.setOption(op_tu5);
      }

    }
</script>

<style lang="scss" scoped>
  .corp{
    display: inline-block;
    height: 30px;
    border: 1px solid green;
    line-height: 30px;
    padding: 2px 20px;
    margin: 0 10px;
  }
  .down{
    position: absolute;
    top: 20px;
    right: 100px;
  }
  .g_btn{
    display: inline-block;
    width: 80px;
    height: 30px;
    border-radius: 5px;
    background-color: #2d7662;
    text-align: center;
    line-height: 30px;
    color: white;
    font-size: 12px;
    margin: 0 20px;
  }
  .text{
    font-size: 12px;
    margin: 30px 0;
    color: #006A00;
    text-align: right;
  }
  .x_tu{
    width: 48%;
    height: 300px;
    float: left;
    background-color: white;
    margin: 10px;
  }
  .d_tu{
    width: 100%;
    height: 400px;
    float: left;
    background-color: white;
    margin: 10px;
    .center_tu{
      margin: 50px auto;
    }
  }
  .active1{
    background-color: #005B00;
  }
</style>
