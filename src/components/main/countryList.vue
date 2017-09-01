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
              <div id="tu3" style="width: 900px;height:600px;margin: 0px 50px 50px -50px;"></div>
              <div></div>
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
        },
        tu3(){
          var myChart3 = echarts.init(document.getElementById('tu3'));
              myChart3.showLoading();
              myChart3.hideLoading();
          var option3 = {
            title: {
              text: '一带一路',
              subtext:this.cityName ,
              top: '0',
              left: '50'
            },
            tooltip : {
              show : true,   //默认显示
              showContent:true, //是否显示提示框浮层
              trigger:'item',//触发类型，默认数据项触发
              triggerOn:'click',//提示触发条件，mousemove鼠标移至触发，还有click点击触发
              alwaysShowContent:false, //默认离开提示框区域隐藏，true为一直显示
              showDelay:0,//浮层显示的延迟，单位为 ms，默认没有延迟，也不建议设置。在 triggerOn 为 'mousemove' 时有效。
              hideDelay:200,//浮层隐藏的延迟，单位为 ms，在 alwaysShowContent 为 true 的时候无效。
              enterable:false,//鼠标是否可进入提示框浮层中，默认为false，如需详情内交互，如添加链接，按钮，可设置为 true。
              position:'right',//提示框浮层的位置，默认不设置时位置会跟随鼠标的位置。只在 trigger 为'item'的时候有效。
              confine:false,//是否将 tooltip 框限制在图表的区域内。外层的 dom 被设置为 'overflow: hidden'，或者移动端窄屏，导致 tooltip 超出外界被截断时，此配置比较有用。
              transitionDuration:0.4,//提示框浮层的移动动画过渡时间，单位是 s，设置为 0 的时候会紧跟着鼠标移动。
              formatter: function (params, ticket, callback) {
                //判断数据，提供相应的url。
                var path="";
                var node=params.data; //当前选中节点数据
                var category=params.data.category;  //选中节点图例0负载 1中间件 2端口号 3数据库 4用户名
                if(category==2){ //为jvm 虚拟机各类参数的路径
                  path = "${ctx}/weblogic.do?host=" + node.host + "&port="
                    + node.port + "&username=" + node.username
                    + "&pwd=" + node.pwd; //准备访问路径
                }else if(category==4){ //为jdbc 数据库的路径
                  path = "${ctx}/oracle.do?host=" + node.host + "&port="
                    + node.port + "&username=" + node.username
                    + "&pwd=" + node.pwd + "&instance="
                    + node.instance; //准备访问路径
                }

                console.log(params);
                
                if(category==2||category==4){ //当选择端口号与用户名时提示加载
                  return "loading";
                }else{                   //其他情况显示所属图例以及名称
                  return myChart.getOption().series[params.seriesIndex].categories[params.data.category].name+":"+params.name;
                }

              }
            },
            legend : { //=========圖表控件
              show : true,
              top: '0',
              left: 'right',
              data : [ {
                name : '大中华',
                icon : 'roundRect'//'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
                },{
                  name : '国家分支',
                  icon : 'roundRect'
                }, {
                  name : '企业分支',
                  icon : 'circle'
                }, {
                  name : '企业内部业务分支',
                  icon : 'circle'
                }]
            },
            series : [ {
              type : 'graph', //关系图
              name : "一带一路关系图", //系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
              layout : 'force', //图的布局，类型为力导图，'circular' 采用环形布局，见示例 Les Miserables
              legendHoverLink : true,//是否启用图例 hover(悬停) 时的联动高亮。
              hoverAnimation : true,//是否开启鼠标悬停节点的显示动画
              coordinateSystem : null,//坐标系可选
              xAxisIndex : 0, //x轴坐标 有多种坐标系轴坐标选项
              yAxisIndex : 0, //y轴坐标
              force : { //力引导图基本配置
                //initLayout: ,//力引导的初始化布局，默认使用xy轴的标点
                repulsion : 150,//节点之间的斥力因子。支持数组表达斥力范围，值越大斥力越大。
                gravity : 0.03,//节点受到的向中心的引力因子。该值越大节点越往中心点靠拢。
                edgeLength :70,//边的两个节点之间的距离，这个距离也会受 repulsion。[10, 50] 。值越小则长度越长
                layoutAnimation : true
                //因为力引导布局会在多次迭代后才会稳定，这个参数决定是否显示布局的迭代动画，在浏览器端节点数据较多（>100）的时候不建议关闭，布局过程会造成浏览器假死。
              },
              //roam : true,//是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
              nodeScaleRatio : 0.6,//鼠标漫游缩放时节点的相应缩放比例，当设为0时节点不随着鼠标的缩放而缩放
              draggable : true,//节点是否可拖拽，只在使用力引导布局的时候有用。
              focusNodeAdjacency : true,//是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点。
              //symbol:'roundRect',//关系图节点标记的图形。ECharts 提供的标记类型包括 'circle'(圆形), 'rect'（矩形）, 'roundRect'（圆角矩形）, 'triangle'（三角形）, 'diamond'（菱形）, 'pin'（大头针）, 'arrow'（箭头）  也可以通过 'image://url' 设置为图片，其中 url 为图片的链接。'path:// 这种方式可以任意改变颜色并且抗锯齿
              //symbolSize:10 ,//也可以用数组分开表示宽和高，例如 [20, 10] 如果需要每个数据的图形大小不一样，可以设置为如下格式的回调函数：(value: Array|number, params: Object) => number|Array
              //symbolRotate:,//关系图节点标记的旋转角度。注意在 markLine 中当 symbol 为 'arrow' 时会忽略 symbolRotate 强制设置为切线的角度。
              //symbolOffset:[0,0],//关系图节点标记相对于原本位置的偏移。[0, '50%']
              //edgeSymbol : [ 'none', 'none' ],//边两端的标记类型，可以是一个数组分别指定两端，也可以是单个统一指定。默认不显示标记，常见的可以设置为箭头，如下：edgeSymbol: ['circle', 'arrow']
             // edgeSymbolSize : 10,//边两端的标记大小，可以是一个数组分别指定两端，也可以是单个统一指定。
              itemStyle : {//===============图形样式，有 normal 和 emphasis 两个状态。normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                normal : { //默认样式
                  label : {
                    show : true
                  }
                },
                emphasis : {//高亮状态
                }
              },
              lineStyle : { //==========关系边的公用线条样式。
                normal : {
                  width : '2',
                  type : 'dashed', //线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
                  curveness : 0.3, //线条的曲线程度，从0到1
                  opacity : 0.5
                  // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
                },
                emphasis : {//高亮状态
                }
              },
              label : { //=============图形上的文本标签
                normal : {
                  show : true,//是否显示标签。
                  position : 'inside',//标签的位置。['50%', '50%'] [x,y]
                  textStyle : { //标签的字体样式
                    color : '#cde6c7', //字体颜色
                    fontStyle : 'normal',//文字字体的风格 'normal'标准 'italic'斜体 'oblique' 倾斜
                    fontWeight : 'bolder',//'normal'标准'bold'粗的'bolder'更粗的'lighter'更细的或100 | 200 | 300 | 400...
                    fontFamily : 'sans-serif', //文字的字体系列
                    fontSize : 12, //字体大小
                  }
                },
                emphasis : {//高亮状态

                }
              },
              edgeLabel : {//==============线条的边缘标签
                normal : {
                  show : false
                },
                emphasis : {//高亮状态

                }
              },
              //别名为nodes   name:影响图形标签显示,value:影响选中后值得显示,category:所在类目的index,symbol:类目节点标记图形,symbolSize:10图形大小
              //label:标签样式。
              data : [
                {
                id : 0,
                category : 0,
                name : '中国',
                symbol : 'roundRect',
                value : 20,
                symbolSize : 80
                },
                {
                id : 1,
                category : 1,
                name : '缅甸',
                symbol : 'roundRect',
                value : 20,
                symbolSize : 60
                },
                {
                id : 2,
                category : 2,
                name : '中材',
                symbol : 'circle',
                value : 20,
                symbolSize : 40,
              }, {
                id : 3,
                category : 2,
                name : '神华',
                symbol : 'circle',
                value : 20,
                symbolSize : 40
              }, {
                id : 4,
                category : 1,
                name : '埃塞俄比亚',
                symbol : 'roundRect',
                value : 20,
                symbolSize : 60
              }, {
                id : 5,
                category : 2,
                name : '中铁',
                symbol : 'circle',
                value : 20,
                symbolSize : 40
              }, {
                id : 6,
                category : 2,
                name : '恒大',
                symbol : 'circle',
                value : 20,
                symbolSize : 40
              }, {
                id : 7,
                category : 2,
                name : '腾讯',
                symbol : 'circle',
                value : 20,
                symbolSize : 40
              }, {
                id : 8,
                category : 1,
                name : '越南',
                symbol : 'roundRect',
                value : 20,
                symbolSize : 60
              }, {
                id : 9,
                category : 2,
                name : '中科',
                symbol : 'circle',
                value : 20,
                symbolSize : 40
              }, {
                id : 10,
                category : 2,
                name : '淘宝',
                symbol : 'circle',
                value : 20,
                symbolSize : 40
              }, {
                id : 11,
                category : 2,
                name : '中运',
                symbol : 'circle',
                value : 20,
                symbolSize : 40
              }, {
                id : 12,
                category : 2,
                name : '华夏',
                symbol : 'circle',
                value : 20,
                symbolSize : 40
              }, {
                id : 13,
                category : 3,
                name : '亚信',
                symbol : 'circle',
                value : 20,
                symbolSize : 30
              }, {
                id : 14,
                category : 3,
                name : '远洋',
                symbol : 'circle',
                value : 20,
                symbolSize : 30
              }, {
                id : 15,
                category : 3,
                name : '大数据',
                symbol : 'circle',
                value : 20,
                symbolSize : 30
              }],
              categories : [ //symbol name：用于和 legend 对应以及格式化 tooltip 的内容。 label有效
                {
                  name : '大中华',
                  symbol : 'rect',
                }, {
                  name : '国家分支',
                  symbol : 'rect'
                }, {
                  name : '企业分支',
                  symbol : 'roundRect'
                }, {
                  name : '企业内部业务分支',
                  symbol : 'roundRect'
                }, {
                  name : '无数据',
                  symbol : 'roundRect'
                } ],
              links : [ //edges是其别名代表节点间的关系数据。
                {
                  source : 1,
                  target : 0
                }, {
                  source : 4,
                  target : 0
                }, {
                  source : 8,
                  target : 0
                }, {
                  source : 2,
                  target : 1
                }, {
                  source : 3,
                  target : 1
                }, {
                  source : 5,
                  target : 4
                }, {
                  source : 6,
                  target : 4
                }, {
                  source : 7,
                  target : 4
                }, {
                  source : 9,
                  target : 8
                }, {
                  source : 10,
                  target : 8
                }, {
                  source : 11,
                  target : 8
                }, {
                  source : 12,
                  target : 8
                }, {
                  source : 13,
                  target : 6
                }, {
                  source : 14,
                  target : 6
                }, {
                  source : 15,
                  target : 2
                }, {
                  source : 16,
                  target : 1
                } ]
            } ]
          };
            myChart3.setOption(option3);

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
       this.tu3()
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
