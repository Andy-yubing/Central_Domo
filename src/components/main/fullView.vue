<template>
  <div class="fullView">
    <p class="fullView_p">产业全国分布
      <a href="javascript:;" @click="dialogTableVisible = true"><img src="../../images/zhenduan.png" height="20" width="18" alt=""> 企业诊断</a>
    </p>
    <div class="fullView_china">
    </div>
    <div class="fullView_heatingPower"></div>
    <div class="fullView_two">
      <span class="fullView_two_left">

      </span>
      <span class="fullView_two_right">

      </span>
    </div>
    <ul class="con_msg">
      <h3><button class="vocation-title">政策要闻</button></h3>
      <li v-for="list in message">
        <div class="has_float">{{list.name}}</div>
        <div class="has_float">{{list.website}}</div>
        <div class="has_float">{{list.time}}</div>
      </li>
    </ul>
    <ul class="con_msg vocation">
      <h3><button class="vocation-title">重点企业</button></h3>
      <li v-for="list in list">
        <div class="has_float has_vocation">
          <button>{{list.btn}}</button>{{list.name}}</div>
        <div class="has_float has_vocation">{{list.website}}</div>
        <div class="has_float has_vocation">{{list.time}}</div>
      </li>
    </ul>
    <el-dialog title="选择企业产业组合" :visible.sync="dialogTableVisible" size="large">
      <div>
        <div class="bottom_line">
          <span class="big_text">选择产业</span>
          <div class="R_box">
            <el-button type="primary" @click="dialogTableVisible = false" class="G_bg">下载产业模板</el-button>
            <el-button type="primary" @click="dialogTableVisible = false" class="G_bg">提交产业模板</el-button>
          </div>
        </div>
        <ul class="area clearFix">
          <a href="javascript:;" v-for="(area,index) in areas">
            <li @click="addClass(index)" :class="{active:oneCode==index}">{{area}}</li>
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
              <input type="text" class="Ip_box" placeholder="输入当前利润">&nbsp;亿元&nbsp;
            </div>
            <div class="F_box">
              <span class="sp_box">旅游</span>
              <input type="text" class="Ip_box" placeholder="输入年份">&nbsp;年&nbsp;
              <input type="text" class="Ip_box" placeholder="输入当前利润">&nbsp;亿元&nbsp;
            </div>
            <div class="F_box">
              <span class="sp_box">建筑工程</span>
              <input type="text" class="Ip_box" placeholder="输入年份">&nbsp;年
              <input type="text" class="Ip_box" placeholder="输入当前利润">&nbsp;亿元
            </div>
          </div>
          <div class="list">
            <div class="F_box">
              <span class="sp_box">电子</span>
              <input type="text" class="Ip_box" placeholder="输入年份">&nbsp;年
              <input type="text" class="Ip_box" placeholder="输入当前利润">&nbsp;亿元
            </div>
            <div class="F_box">
              <span class="sp_box">投资</span>
              <input type="text" class="Ip_box" placeholder="输入年份">&nbsp;年
              <input type="text" class="Ip_box" placeholder="输入当前利润">&nbsp;亿元
            </div>
            <div class="F_box">
              <span class="sp_box">石油石化</span>
              <input type="text" class="Ip_box" placeholder="输入年份">&nbsp;年
              <input type="text" class="Ip_box" placeholder="输入当前利润">&nbsp;亿元
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
              <input type="text" class="Ip_box" placeholder="输入当前利润">&nbsp;亿元
            </div>
            <div class="F_box">
              <span class="sp_box">旅游</span>
              <input type="text" class="Ip_box" placeholder="输入当前利润">&nbsp;亿元
            </div>
            <div class="F_box">
              <span class="sp_box">建筑工程</span>
              <input type="text" class="Ip_box" placeholder="输入当前利润">&nbsp;亿元
            </div>
          </div>
          <div class="list">
            <div class="F_box">
              <span class="sp_box">电子</span>
              <input type="text" class="Ip_box" placeholder="输入当前利润">&nbsp;亿元
            </div>
            <div class="F_box">
              <span class="sp_box">投资</span>
              <input type="text" class="Ip_box" placeholder="输入当前利润">&nbsp;亿元
            </div>
            <div class="F_box">
              <span class="sp_box">石油石化</span>
              <input type="text" class="Ip_box" placeholder="输入当前利润">&nbsp;亿元
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
</template>
<script>
import echarts from 'echarts';
require('echarts/map/js/china.js')
import map_data from "../data/map_bar.js"
export default {
  data() {
    return {
      kindList: [],
      cityList: [],
      moneyList: [],
      radarData: [],
      activeName: "",
      industrial: "",
      tit_1: "",
      tit_2: "",
      message: [{
          name: '39分生态改革文件相继出台“任务清单”落实',
          website: '',
          time: '8/15'
        },
        {
          name: '国务院安委会：个别地区大事故责任追究未执行到位 ',
          website: '',
          time: '8/15'
        },
        {
          name: '聚焦《重大行政决策程序暂行条例（征求意见稿）》',
          website: '',
          time: '8/15'
        },
        {
          name: '质检总局出台“十条禁令”进一步规范执法行为 ',
          website: '',
          time: '8/2'
        },
        {
          name: '国家测绘地理信息局印发《地理信息产业统计分类（2017）》',
          website: '',
          time: '8/3'
        },
        {
          name: '公安部：年内实现居住证制度全覆盖 ',
          website: '',
          time: '8/5'
        },
        {
          name: '八部门联合出台指导性意见:分享经济 不用老办法管',
          website: '',
          time: '8/4'
        }
      ],


      areas: [
        '物流', '旅游', '建筑工程', '公用事业', '电子', '石油石化', '军工', '投资', '新能源', 'TMT',
        '农业', '机械', '矿业', '建材', '科研', '金融', '冶金', '房地产', '现代服务', '煤炭'
      ],
      oneCode: 0,
      heatData: [
        [0, 0, 221],
        [0, 1, 953],
        [0, 2, 425],
        [0, 3, 444],
        [0, 4, 740],
        [0, 5, 738],
        [0, 6, 603],
        [0, 7, 1000],
        [0, 8, 380],
        [0, 9, 806],
        [0, 10, 809],
        [0, 11, 390],
        [1, 0, 183],
        [1, 1, 676],
        [1, 2, 402],
        [1, 3, 579],
        [1, 4, 427],
        [1, 5, 291],
        [1, 6, 118],
        [1, 7, 107],
        [1, 8, 803],
        [1, 9, 756],
        [1, 10, 838],
        [1, 11, 625],
        [2, 0, 713],
        [2, 1, 555],
        [2, 2, 243],
        [2, 3, 578],
        [2, 4, 599],
        [2, 5, 223],
        [2, 6, 222],
        [2, 7, 159],
        [2, 8, 335],
        [2, 9, 165],
        [2, 10, 484],
        [2, 11, 237],
        [3, 0, 147],
        [3, 1, 792],
        [3, 2, 732],
        [3, 3, 685],
        [3, 4, 366],
        [3, 5, 773],
        [3, 6, 592],
        [3, 7, 284],
        [3, 8, 234],
        [3, 9, 530],
        [3, 10, 283],
        [3, 11, 182],
        [4, 0, 105],
        [4, 1, 926],
        [4, 2, 170],
        [4, 3, 373],
        [4, 4, 194],
        [4, 5, 707],
        [4, 6, 730],
        [4, 7, 362],
        [4, 8, 703],
        [4, 9, 755],
        [4, 10, 303],
        [4, 11, 490],
        [5, 0, 236],
        [5, 1, 146],
        [5, 2, 818],
        [5, 3, 982],
        [5, 4, 377],
        [5, 5, 533],
        [5, 6, 529],
        [5, 7, 806],
        [5, 8, 884],
        [5, 9, 352],
        [5, 10, 963],
        [5, 11, 614],
        [6, 0, 777],
        [6, 1, 519],
        [6, 2, 551],
        [6, 3, 949],
        [6, 4, 316],
        [6, 5, 743],
        [6, 6, 620],
        [6, 7, 0],
        [6, 8, 0],
        [6, 9, 0],
        [6, 10, 0],
        [6, 11, 0]
      ],
      list: [{
          btn: '煤炭行业',
          name: '神华集团 山西焦煤 冀中能源 山东能源',
          website: '',
          time: '8/7'
        },
        {
          btn: '城投行业',
          name: '上海城投 天津城投 北京城投 合肥城投',
          website: '',
          time: '8/15'
        },
        {
          btn: '建筑工程',
          name: '中国铁建 中国建筑 中国交建 中国电力 ',
          website: '',
          time: '8/15'
        },
        {
          btn: '交通运输',
          name: '南方航空 中远航运 中国国航 中海发展',
          website: '',
          time: '8/15'
        },
        {
          btn: '物流行业',
          name: '中远海运 顺丰速运 远成物流 德邦物流',
          website: '',
          time: '8/15'
        },

      ],
      dialogTableVisible: false,
    }
  },
  methods: {
    addClass(index) {
      this.oneCode = index
    },
    distribute(geoCoordMap) {
      let vm = this;
      let chinaDom = document.getElementsByClassName('fullView_china')[0];
      var myChart = echarts.init(chinaDom);
      var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value)
            });
          }
        }
        return res;
      }
      let option = {
        backgroundColor: '#404a59',
        animation: true,
        animationDuration: 1000,
        animationEasing: 'cubicInOut',
        animationDurationUpdate: 1000,
        animationEasingUpdate: 'cubicInOut',
        color: ['#ddb926'],
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        geo: {
          map: 'china',
          top: '100',
          left: '150',
          center: [117.98561551896913, 31.205000490896193],
          zoom: 1,
          label: {
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              areaColor: '#323c48',
              borderColor: '#111',

            },
            emphasis: {
              areaColor: '#2a333d'
            }
          }
        },

        grid: {
          right: 40,
          top: 40,
          bottom: 40,
          width: '30%',
           
        },
        tooltip: {
          trigger: 'item',
        },
        xAxis: [{
          type: 'value',
          scale: true,
          splitLine: { show: false },
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: { margin: 2, textStyle: { color: '#aaa' } },
        }],
        yAxis: [{
          type: 'category',
          nameGap: 16,
          axisLine: { show: false, lineStyle: { color: '#ddd' } },
          axisTick: { show: false, lineStyle: { color: '#ddd' } },
          axisLabel: { interval: 0, textStyle: { color: '#ddd' } },
          data: this.kindList,
        }],
        series: [{
          name: '2011年',
          type: 'bar',
          data: vm.moneyList,
        }]
      };
      myChart.on('click', renderBrushed);
      myChart.setOption(option);

      setTimeout(function() {
        myChart.setOption({
          series: [{
            id: 'map',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(vm.cityList),
            symbolSize: 12,
            label: {
              emphasis: {
                show: false
              },
              normal: {
                formatter: '{b}',
                position: 'right',
                show: true
              }
            },
            itemStyle: {
              emphasis: {
                borderColor: '#fff',
                borderWidth: 1
              }
            },
             symbolSize: function (val) {
                return Math.max(val[2] / 1200, 10);
            },
          }]
        })
      }, 0)

      function renderBrushed(params) {
        vm.tit_1 = params.name + "热力图";
        vm.tit_2 = params.name + "雷达图";
        vm.cityList = [];
        for (let i = 0; i < map_data.list.length; i++) {
          if (params.name == map_data.list[i].name) {
            for (let j = 0; j < map_data.list[i].value.length; j++) {
              vm.cityList.push({ name: map_data.list[i].value[j].area, value: map_data.list[i].value[j].val });
            }
          }
        }
        switch (params.name) {
          case "房地产":
            vm.industrial = map_data.industryList.realty;
            break;
          case "交通运输":
            vm.industrial = map_data.industryList.transportation;
            break;
          default:
            vm.industrial = map_data.industryList.other;
        }
        console.log(vm.cityList);
        vm.heatingPower();
        vm.radar();
        this.setOption({
          series: [{
            id: 'map',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(vm.cityList),
            symbolSize: 12,
            label: {
              emphasis: {
                show: false
              },
              normal: {
                formatter: '{b}',
                position: 'right',
                show: true
              }
            },
             symbolSize: function (val) {
                return Math.max(val[2] / 1200, 10);
            },
            itemStyle: {
              emphasis: {
                borderColor: '#fff',
                borderWidth: 1
              }
            }
          }]
        })
      }
    },
    heatingPower() {
      let chinaDom = echarts.init(document.getElementsByClassName('fullView_heatingPower')[0]);
      var hours = ['1月', '2月', '3月', '4月', '5月', '6月',
        '7月', '8月', '9月', '10月', '11月', '12月'
      ];
      var days = ['2011', '2012', '2013',
        '2014', '2015', '2016', '2017'
      ];
      /*房地产*/
      var option = {
        title: {
          text: this.tit_1
        },
        tooltip: {
          position: 'top'
        },
        animation: false,
        grid: {
          height: '50%',
          y: '11%'
        },
        xAxis: {
          type: 'category',
          data: hours,
          splitArea: {
            show: true
          }
        },
        yAxis: {
          type: 'category',
          data: days,
          splitArea: {
            show: true
          }
        },
        visualMap: {
          min: 100,
          max: 2000,
          calculable: true,
          orient: 'horizontal',
          left: 'center',
          bottom: '15%'
        },
        series: [{
          name: '产值',
          type: 'heatmap',
          data: this.industrial,
          label: {
            normal: {
              show: true
            }
          },
          tooltip: {
            formatter: function(param) {
              var re = '';
              re += param.seriesName;
              re += '<br />';
              re += param.name;
              re += '：';
              re += param.value[2];
              re += '（亿元）';
              return re;
            }
          },
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }]
      };
      if (option && typeof option === "object") {
        chinaDom.setOption(option, true);
      }
    },
    radar() {
      let vm = this;
      let myChart = echarts.init(document.getElementsByClassName('fullView_two_left')[0]);
      let option = {
        title: {
          text: this.tit_2
        },
        tooltip: {},
        legend: {
          show: false,
        },
        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              color: '#fff',
              backgroundColor: '#999',
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: vm.cityList
        },
        series: [{
          type: 'radar',
          data: [{
            value: vm.cityList
          }]
        }]
      };
      myChart.setOption(option);
    },
    barList() {
      var vm = this;
      let myChart = echarts.init(document.getElementsByClassName('fullView_two_right')[0]);

      //app.title = '世界人口总量 - 条形图';

      let option = {
        title: {
          text: '产业组合热度'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: function(param) {
            var re = '',
              param = param[0];
            re += param.name;
            re += '<br />';
            re += '企业';
            re += '：';
            re += param.value;
            re += '（家）';
            return re;
          }
        },
        legend: {
          data: ['企业数量']
        },
        grid: {
          show: false,
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          axisTick: { show: false },
          axisLabel: {
            show: false
          }
        },
        yAxis: {
          type: 'category',
          position: 'right',
          axisTick: { show: false },
          axisLabel: {
            show: true,
          },
          data: ['地产+金融+物流+服务+商贸', '地产+金融+健康', '旅游+电商+金融', '矿业+运输+化工+设备制造+电力', '文化+地产+现代服务', '地产+健康+教育+服务'].reverse()
        },
        series: [{
          name: '企业数量',
          type: 'bar',
          label: {
            normal: {
              show: true,
              position: 'inside'
            }
          },
          data: [90665, 83837, 83132, 71332, 54072, 50001].reverse()
        }]
      };
      if (option && typeof option === "object") {
        myChart.setOption(option, true);
      }
      myChart.on("click", function(param) {
        vm.$router.push({ path: 'groupList', query: { list: param.name } })
      });
      myChart.setOption(option);
    },
    sortList(array) {
      var i = 0,
        len = array.length,
        j, d;
      for (; i < len; i++) {
        for (j = 0; j < len; j++) {
          if (array[i].money < array[j].money) {
            d = array[j];
            array[j] = array[i];
            array[i] = d;
          }
        }
      }
      return array;
    }
  },
  mounted() {
    let vm = this;
    //vm.distribution();
    this.distribute(map_data.geoCoordMap);
    vm.heatingPower();
    vm.radar();
    vm.barList();

  },
  created() {
    this.tit_1 = "智能制造热度图";
    this.tit_2 = "智能制造雷达图";
    console.log(map_data);
    let vm = this;

    function sortNumber(a, b) {
      return a - b;
    }
   
    for (let i = 0; i < vm.sortList(map_data.list).length; i++) {
     vm.moneyList[i] = {};
     vm.moneyList[i].name = vm.sortList(map_data.list)[i].name;
     vm.moneyList[i].value = vm.sortList(map_data.list)[i].money;
   }
    let list = [];
    console.log(map_data);
    for (let i = 0; i < map_data.list.length; i++) {
      vm.kindList.push(map_data.list[i]['name']);
      for (let j = 0; j < map_data.list[i].value.length; j++) {
        vm.cityList.push({ name: map_data.list[i].value[j].area, value: map_data.list[i].value[j].val });
       // vm.radarData.push({ name: map_data.list[i].value[j].area});
      }
    }

    console.log(vm.cityList);
    //默认展示房地产
    this.industrial = map_data.industryList.realty;
  },
}

</script>
<style lang="scss" scoped>
.fullView_p {
  background-color: #FFF;
  padding: 15px 15px 15px 50px;
  >a {
    float: right;
    background-color: #2d7662;
    color: #fff;
    border: 0;
    padding: 5px 10px;
    -webkit-border-radius: 6px;
    border-radius: 6px;
    font-size: 14px;
    margin-top: -5px;
    img {
      vertical-align: middle;
    }
  }
}

.fullView_china {
  height: 650px;
  margin-top: 20px;
  background-color: #FFF;
}

.fullView_heatingPower {
  height: 500px;
  margin-top: 20px;
}

.fullView_two {
  height: 400px;
  display: flex;
  -webkit-display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  >span {
    width: 47%;
  }
}

.con_msg {
  margin-top: 20px;
  background-color: #FFF;
  li {
    //list-style: disc;
    line-height: 40px;
    height: 40px;
    .has_float {
      text-align: center;
      width: 30%;
      display: inline-block;
      font-size: 12px;
      position: relative;
      &:first-child {
        text-align: left;
        padding-left: 60px;
        /* &::before {
          content: "";
          position: absolute;
          left: 35px;
          top: 15px;
          height: 10px;
          width: 10px;
          background-color: #00b6e6;
          -webkit-border-radius: 5px;
          border-radius: 5px;
        } */
      }
      &.has_vocation {
        >button {
          margin-right: 20px;
          background-color: #2d7662;
          border: 0;
          padding: 5px 10px;
          color: #FFF;
        }
        &::before {
          content: "";
          position: absolute;
          left: 35px;
          top: 15px;
          height: 0;
          width: 10px;
          background-color: #00b6e6;
          -webkit-border-radius: 5px;
          border-radius: 5px;
        }
      }
    }
  }
  .vocation-title {
    margin-left: 60px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #2d7662;
    border: 0;
    padding: 5px 10px;
    color: #FFF;
    font-size: 16px;
  }
  li:hover {
    color: #355699
  }
  &.vocation {
    margin-top: 30px;
  }
}

.area {
  width: 100%;
  li {
    float: left;
    margin: 10px 20px;
    width: 80px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
  }
  a {
    color: black;
  }
  .block {
    padding-top: 5px;
  }
}

.list {
  height: 50px;
  width: 100%;
  margin-top: 20px;
  background-color: #f1f4fc;
  .F_box {
    text-align: left;
    width: 33.33%;
    height: 100%;
    line-height: 50px;
    float: left;
    .Ip_box {
      display: inline-block;
      width: 80px;
      height: 30px;
      border: 1px solid #2d7662;
      border-radius: 5px;
      padding: 0 10px;
    }
    .sp_box {
      display: inline-block;
      height: 32px;
      padding: 2px 15px;
      background-color: #2d7662;
      border-radius: 5px;
      line-height: 30px;
      text-align: center;
      color: white;
      margin-right: 10px;
    }
  }
}

</style>


