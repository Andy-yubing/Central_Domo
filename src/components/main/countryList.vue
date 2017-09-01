<template>
    <div>
      <div  class="wbg">
        <div class=" bottom_line">
          国家详情
        </div>
        <span class="c_msg">国家名称: {{item.name}}</span>
        <span class="c_msg">净额(亿): {{item.area}}</span>
        <span class="c_msg">存量(亿): {{item.number}}</span>
      </div>
      <div  class="wbg">
        <el-tabs v-model="activeName">
          <el-tab-pane label="投资趋势" name="first">
            <div id="tu1"class="tu1"></div>
          </el-tab-pane>
          <el-tab-pane label="行业热度" name="second">
              <div id="tu2" style="width: 900px;height:500px;margin: 50px auto;"></div>
          </el-tab-pane>
          <el-tab-pane label="关系图谱" name="third">
            <div  class="wbg">
              <div class="tu3"></div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="相关政策" name="fourth">
            <div  class="wbg">
              <!--<div class="bottom_line">政策解读</div>-->
              <div  >
                <ul class="con_msg">
                  <li v-for="list in message">
                    <div class="has_float text_left">{{list.name}}</div>
                    <div class="has_float"></div>
                    <div class="has_float">{{list.time}}</div>
                  </li>
                </ul>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>



    </div>
</template>

<script>
  import ElementUi from "element-ui"
  import echarts from "echarts"
    export default {
      data(){
        return{
          activeName: 'first',
          item:this.$route.query.item,
          cityes:[
            {
              id:1,
              name:'缅甸',
              area:'33172',
              number:'425873',
            },
            {
              id:2,
              name:'埃塞俄比亚',
              area:'5421',
              number:'47589',
            },
            {
              id:3,
              name:'波兰',
              area:'2510',
              number:'35211',
            },
            {
              id:4,
              name:'捷克',
              area:'-1741',
              number:'22431',
            },
            {
              id:5,
              name:'斯洛伐克',
              area:'0',
              number:'12779',
            },
            {
              id:6,
              name:'阿塞拜疆',
              area:'136',
              number:'6370',
            },
            {
              id:7,
              name:'克罗地亚',
              area:'0',
              number:'1182',
            },
            {
              id:8,
              name:'波黑',
              area:'162',
              number:'775',
            },
            {
              id:9,
              name:'阿尔巴尼亚',
              area:'0',
              number:'695',
            },
            {
              id:10,
              name:'马其顿',
              area:'-1',
              number:'211',
            }
          ],
          message:[
            {
              name:'缅甸增加三百多种商品进入“完全在线申报进出口许可证”系统',
              website:' http://www.chyxx.com/zhengce/201708/551216.html',
              time:'2017/5/31'
            },
            {
              name:'缅甸公布限制投资行业',
              website:' http://www.chyxx.com/zhengce/201708/551216.html',
              time:' 2017/4/24'
            },
            {
              name:'除对环境造成影响，一般投资将不需要缅甸投资委员会批准',
              website:' http://www.chyxx.com/zhengce/201708/551216.html',
              time:'2016/9/21'
            },
            {
              name:'缅甸投资委员会将不再批准自然资源开采项目',
              website:' http://www.chyxx.com/zhengce/201708/551216.html',
              time:' 2016/7/26'
            },
            {
              name:'缅甸暂时放宽车辆和机械边贸进口 ',
              website:' http://www.chyxx.com/zhengce/201708/551216.html',
              time:'2016/5/10'
            },
            {
              name:'缅甸发布禁止外企投资项目种类目录',
              website:' http://www.chyxx.com/zhengce/201708/551216.html',
              time:'2016/4/1'
            },
            {
              name:'缅甸将颁布关于外国专家、工商企业进入面的法案',
              website:' http://www.chyxx.com/zhengce/201708/551216.html',
              time:'2016/3/30'
            },
            {
              name:'缅甸矿业部就法规细则起草事宜征求建议',
              website:' http://www.chyxx.com/zhengce/201708/551216.html',
              time:' 2016/2/15'
            },
            {
              name:'缅甸限制重型机械进口',
              website:' http://www.chyxx.com/zhengce/201708/551216.html',
              time:'2017/8/15'
            },
            {
              name:'缅甸通过金融机构法',
              website:' http://www.chyxx.com/zhengce/201708/551216.html',
              time:'2017/8/15'
            }
          ],
          cityName:this.$route.query.item.name
        }
      },
      methods:{
        tu1(){
          var myChart = echarts.init(document.getElementById('tu1'));
          var option = {
            title: {
              text: '单位:万美元'
            },
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              data:[this.cityName]
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },

            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['2007','2008','2009','2010','2011','2012','2013','2014','2015']
            },
            yAxis: {
              type: 'value'
            },

            series: [
              {
                name:this.cityName,
                type:'line',
                stack: '总量',
                smooth:true,
                itemStyle :{normal : {
                  color:'#5695d4',
                  lineStyle:{color:'#5695d4'}}

                },
                data:[120, 132, 101, 134, 90, 150, 80,120,160]
              }
            ]
          };
          myChart.setOption(option);
        },
        tu2(){
          var myChart2 = echarts.init(document.getElementById('tu2'));
          var option2 = {
            color: ['#3398DB'],
            tooltip : {
              trigger: 'axis',
              axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              }
            },
            title: {
              text: '单位:万美元'
            },
            legend: {
              data : [this.cityName],
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
                data : ['化工制造', '桥梁', '基础设施', '装备制造', '电力', '其他'],
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
                name:this.cityName,
                type:'bar',
                barWidth: '60%',
                data:[10, 52, 200, 334, 390, 330]
              }
            ]
          };

          myChart2.setOption(option2);
        }
      },
      mounted(){
       for(var i=0;i<this.cityes.length;i++){
         if(this.cityes[i].id == this.$route.params.id){
           this.item = this.cityes[i]
           this.cityName = this.cityes[i].name
         }
       }
       this.tu1()
        this.tu2()
      }
    }
</script>

<style lang="scss" scoped>
  .c_msg{
    display: inline-block;
    padding: 5px 30px;
  }
  .tu1{
    width: 80%;
    height: 500px;
    margin: 50px auto;
  }
  .tu2{
    width: 80%;
    height: 500px;
    margin: 50px auto;
  }
  .tu3{
    width: 70%;
    height: 500px;
    margin: 0 auto;
    background: url("../../images/gxt.png") no-repeat left;
    background-size: 80% 100%;

  }

  .con_msg{
    margin-top: 20px;
    li:nth-of-type(odd){
      background-color: #f1f4fc;
    }
    li{
      list-style: disc;
      line-height: 40px;
      height: 40px;
      padding-left: 30px;
      .has_float{
        text-align: center;
        width: 33%;
        display: inline-block;
        font-size: 12px;
      }
      .text_left{
        text-align: left;
      }
    }
    li:hover{
      color:#0000BD
    }
  }
</style>
