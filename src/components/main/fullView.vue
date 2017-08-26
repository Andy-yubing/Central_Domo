<template>
  <div class="fullView">
    <p class="fullView_p">产业全国分布
      <a href="/body/diagnose"><img src="../../images/zhenduan.png" height="20" width="18" alt=""> 企业诊断</a>
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
  </div>
</template>
<script>
import echarts from 'echarts';
require('echarts/map/js/china.js')
export default {
  data() {
    return {
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
      heatData:[
        [0,0,221],[0,1,953],[0,2,425],[0,3,444],[0,4,740],[0,5,738],[0,6,603],[0,7,1000],[0,8,380],[0,9,806],[0,10,809],[0,11,390],
        [1,0,183],[1,1,676],[1,2,402],[1,3,579],[1,4,427],[1,5,291],[1,6,118],[1,7,107],[1,8,803],[1,9,756],[1,10,838],[1,11,625],
        [2,0,713],[2,1,555],[2,2,243],[2,3,578],[2,4,599],[2,5,223],[2,6,222],[2,7,159],[2,8,335],[2,9,165],[2,10,484],[2,11,237],
        [3,0,147],[3,1,792],[3,2,732],[3,3,685],[3,4,366],[3,5,773],[3,6,592],[3,7,284],[3,8,234],[3,9,530],[3,10,283],[3,11,182],
        [4,0,105],[4,1,926],[4,2,170],[4,3,373],[4,4,194],[4,5,707],[4,6,730],[4,7,362],[4,8,703],[4,9,755],[4,10,303],[4,11,490],
        [5,0,236],[5,1,146],[5,2,818],[5,3,982],[5,4,377],[5,5,533],[5,6,529],[5,7,806],[5,8,884],[5,9,352],[5,10,963],[5,11,614],
        [6,0,777],[6,1,519],[6,2,551],[6,3,949],[6,4,316],[6,5,743],[6,6,620],[6,7,0],[6,8,0],[6,9,0],[6,10,0],[6,11,0]
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
          name: '中国南航 中国远洋 南方航空 国际航空',
          website: '',
          time: '8/15'
        },
        {
          btn: '物流行业',
          name: '中外运 中远海运 顺丰 中国石油',
          website: '',
          time: '8/15'
        },

      ],
    }
  },
  methods: {
    distribution() {
      var vm=this;
      let chinaDom = document.getElementsByClassName('fullView_china')[0];
      var myChart = echarts.init(chinaDom);
      var app = {};
      var option = null;
      var geoCoordMap = {
        '海门': [121.15, 31.89],
        '鄂尔多斯': [109.781327, 39.608266],
        '招远': [120.38, 37.35],
        '舟山': [122.207216, 29.985295],
        '齐齐哈尔': [123.97, 47.33],
        '盐城': [120.13, 33.38],
        '赤峰': [118.87, 42.28],
        '青岛': [120.33, 36.07],
        '乳山': [121.52, 36.89],
        '金昌': [102.188043, 38.520089],
        '泉州': [118.58, 24.93],
        '莱西': [120.53, 36.86],
        '日照': [119.46, 35.42],
        '胶南': [119.97, 35.88],
        '南通': [121.05, 32.08],
        '西藏': [91.11, 29.97],
        '云浮': [112.02, 22.93],
        '梅州': [116.1, 24.55],
        '文登': [122.05, 37.2],
        '上海': [121.48, 31.22],
        '攀枝花': [101.718637, 26.582347],
        '威海': [122.1, 37.5],
        '承德': [117.93, 40.97],
        '厦门': [118.1, 24.46],
        '汕尾': [115.375279, 22.786211],
        '潮州': [116.63, 23.68],
        '丹东': [124.37, 40.13],
        '太仓': [121.1, 31.45],
        '曲靖': [103.79, 25.51],
        '烟台': [121.39, 37.52],
        '福建': [119.3, 26.08],
        '瓦房店': [121.979603, 39.627114],
        '即墨': [120.45, 36.38],
        '抚顺': [123.97, 41.97],
        '玉溪': [102.52, 24.35],
        '张家口': [114.87, 40.82],
        '阳泉': [113.57, 37.85],
        '莱州': [119.942327, 37.177017],
        '湖州': [120.1, 30.86],
        '汕头': [116.69, 23.39],
        '昆山': [120.95, 31.39],
        '宁波': [121.56, 29.86],
        '湛江': [110.359377, 21.270708],
        '揭阳': [116.35, 23.55],
        '荣成': [122.41, 37.16],
        '连云港': [119.16, 34.59],
        '葫芦岛': [120.836932, 40.711052],
        '常熟': [120.74, 31.64],
        '东莞': [113.75, 23.04],
        '河源': [114.68, 23.73],
        '淮安': [119.15, 33.5],
        '泰州': [119.9, 32.49],
        '南宁': [108.33, 22.84],
        '营口': [122.18, 40.65],
        '惠州': [114.4, 23.09],
        '江阴': [120.26, 31.91],
        '蓬莱': [120.75, 37.8],
        '韶关': [113.62, 24.84],
        '嘉峪关': [98.289152, 39.77313],
        '广东': [113.23, 23.16],
        '延安': [109.47, 36.6],
        '山西': [112.53, 37.87],
        '清远': [113.01, 23.7],
        '中山': [113.38, 22.52],
        '云南': [102.73, 25.04],
        '寿光': [118.73, 36.86],
        '盘锦': [122.070714, 41.119997],
        '长治': [113.08, 36.18],
        '深圳': [114.07, 22.62],
        '珠海': [113.52, 22.3],
        '宿迁': [118.3, 33.96],
        '咸阳': [108.72, 34.36],
        '铜川': [109.11, 35.09],
        '平度': [119.97, 36.77],
        '佛山': [113.11, 23.05],
        '海南': [110.35, 20.02],
        '江门': [113.06, 22.61],
        '章丘': [117.53, 36.72],
        '肇庆': [112.44, 23.05],
        '大连': [121.62, 38.92],
        '临汾': [111.5, 36.08],
        '吴江': [120.63, 31.16],
        '石嘴山': [106.39, 39.04],
        '辽宁': [123.38, 41.8],
        '苏州': [120.62, 31.32],
        '茂名': [110.88, 21.68],
        '嘉兴': [120.76, 30.77],
        '吉林': [125.35, 43.88],
        '胶州': [120.03336, 36.264622],
        '宁夏': [106.27, 38.47],
        '张家港': [120.555821, 31.875428],
        '三门峡': [111.19, 34.76],
        '锦州': [121.15, 41.13],
        '江西': [115.89, 28.68],
        '柳州': [109.4, 24.33],
        '三亚': [109.511909, 18.252847],
        '自贡': [104.778442, 29.33903],
        '吉林': [126.57, 43.87],
        '阳江': [111.95, 21.85],
        '泸州': [105.39, 28.91],
        '青海': [101.74, 36.56],
        '宜宾': [104.56, 29.77],
        '呼和浩特': [111.65, 40.82],
        '四川': [104.06, 30.67],
        '大同': [113.3, 40.12],
        '镇江': [119.44, 32.2],
        '广西': [110.28, 25.29],
        '张家界': [110.479191, 29.117096],
        '宜兴': [119.82, 31.36],
        '北海': [109.12, 21.49],
        '陕西': [108.95, 34.27],
        '金坛': [119.56, 31.74],
        '东营': [118.49, 37.46],
        '牡丹江': [129.58, 44.6],
        '遵义': [106.9, 27.7],
        '绍兴': [120.58, 30.01],
        '扬州': [119.42, 32.39],
        '常州': [119.95, 31.79],
        '潍坊': [119.1, 36.62],
        '重庆': [106.54, 29.59],
        '台州': [121.420757, 28.656386],
        '江苏': [118.78, 32.04],
        '滨州': [118.03, 37.36],
        '贵州': [106.71, 26.57],
        '无锡': [120.29, 31.59],
        '本溪': [123.73, 41.3],
        '克拉玛依': [84.77, 45.59],
        '渭南': [109.5, 34.52],
        '马鞍山': [118.48, 31.56],
        '宝鸡': [107.15, 34.38],
        '焦作': [113.21, 35.24],
        '句容': [119.16, 31.95],
        '北京': [116.46, 39.92],
        '徐州': [117.2, 34.26],
        '衡水': [115.72, 37.72],
        '内蒙古': [110, 40.58],
        '绵阳': [104.73, 31.48],
        '新疆': [87.68, 43.77],
        '枣庄': [117.57, 34.86],
        '浙江': [120.19, 30.26],
        '淄博': [118.05, 36.78],
        '鞍山': [122.85, 41.12],
        '溧阳': [119.48, 31.43],
        '库尔勒': [86.06, 41.68],
        '安阳': [114.35, 36.1],
        '开封': [114.35, 34.79],
        '山东': [117, 36.65],
        '德阳': [104.37, 31.13],
        '温州': [120.65, 28.01],
        '九江': [115.97, 29.71],
        '邯郸': [114.47, 36.6],
        '临安': [119.72, 30.23],
        '甘肃': [103.73, 36.03],
        '沧州': [116.83, 38.33],
        '临沂': [118.35, 35.05],
        '南充': [106.110698, 30.837793],
        '天津': [117.2, 39.13],
        '富阳': [119.95, 30.07],
        '泰安': [117.13, 36.18],
        '诸暨': [120.23, 29.71],
        '河南': [113.65, 34.76],
        '黑龙江': [126.63, 45.75],
        '聊城': [115.97, 36.45],
        '芜湖': [118.38, 31.33],
        '唐山': [118.02, 39.63],
        '平顶山': [113.29, 33.75],
        '邢台': [114.48, 37.05],
        '德州': [116.29, 37.45],
        '济宁': [116.59, 35.38],
        '荆州': [112.239741, 30.335165],
        '宜昌': [111.3, 30.7],
        '义乌': [120.06, 29.32],
        '丽水': [119.92, 28.45],
        '洛阳': [112.44, 34.7],
        '秦皇岛': [119.57, 39.95],
        '株洲': [113.16, 27.83],
        '河北': [114.48, 38.03],
        '莱芜': [117.67, 36.19],
        '常德': [111.69, 29.05],
        '保定': [115.48, 38.85],
        '湘潭': [112.91, 27.87],
        '金华': [119.64, 29.12],
        '岳阳': [113.09, 29.37],
        '湖南': [113, 28.21],
        '衢州': [118.88, 28.97],
        '廊坊': [116.7, 39.53],
        '菏泽': [115.480656, 35.23375],
        '安徽': [117.27, 31.86],
        '湖北': [114.31, 30.52],
        '大庆': [125.03, 46.58]
      };

      var data = [
        { name: '北京', value: 3908.85 },
        { name: '天津', value: 8302.38 },
        { name: '河北', value: 17861.16 },
        { name: '上海', value: 3532.65 },
        { name: '江苏', value: 29000.57 },
        { name: '浙江', value: 17449.61 },
        { name: '福建', value: 14408.89 },
        { name: '山东', value: 35350.57 },
        { name: '广东', value: 1840.56 },
        { name: '海南', value: 21110.31 },
        { name: '山西', value: 3894.62 },
        { name: '安徽', value: 15670.89 },
        { name: '江西', value: 11965.54 },
        { name: '河南', value: 22799.95 },
        { name: '湖北', value: 18263.52 },
        { name: '湖南', value: 14749.59 },
        { name: '内蒙古', value: 8668.87 },
        { name: '广西', value: 1053.35 },
        { name: '重庆', value: 8347.74 },
        { name: '四川', value: 18180.29 },
        { name: '贵州', value: 6889.63 },
        { name: '云南', value: 9021.46 },
        { name: '西藏', value: 873.79 },
        { name: '陕西', value: 11437.9 },
        { name: '甘肃', value: 3443.28 },
        { name: '青海', value: 1903.44 },
        { name: '宁夏', value: 1849.16 },
        { name: '新疆', value: 6339.3 },
        { name: '辽宁', value: 3708.6 },
        { name: '吉林', value: 7212.96 },
        { name: '黑龙江', value: 3743.29 }
      ];


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
      };

      option = {
        backgroundColor: '#404a59',
        title: [{
          text: '',
          subtext: '',
          left: 'center',
          textStyle: {
            color: '#fff'
          }
        }, {
          id: 'statistic',
          right: 120,
          top: 40,
          width: 100,
          textStyle: {
            color: '#fff',
            fontSize: 16
          }
        }],
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          y: 'bottom',
          x: 'right',
          data: ['pm2.5'],
          textStyle: {
            color: '#fff'
          }
        },
        grid: {
          right: 40,
          top: 100,
          bottom: 40,
          width: '200px'
        },
        xAxis: {
          type: 'value',
          scale: true,
          position: 'top',
          axisTick : {show: false},
          axisLabel:{
            show:false
          },
          axisLabel: { show: !!0 },
          boundaryGap: false,
          splitLine: { show: false },
          axisLine: { show: false }
        },
        yAxis: {
          type: 'category',
          name: '行业排行：    单位(亿元)',
          nameGap: 16,
          axisLine: { show: false, lineStyle: { color: '#ddd' } },
          axisTick: { show: false, lineStyle: { color: '#ddd' } },
          axisLabel: { interval: 0, textStyle: { color: '#ddd' } },
          data: ["房地产", "交通运输", "制造业", "能源", "电子", "现代服务", "商贸", "建材", "TMT", "旅游", "化工", "农业", "冶金", "矿业", "公用事业", "金融", "物流", "科研", "建筑工程", "石油石化"].reverse()
        },
        geo: {
          map: 'china',
          label: {
            emphasis: {
              show: false
            }
          },
          roam: true,
          itemStyle: {
            normal: {
              areaColor: '#323c48',
              borderColor: '#111'
            },
            emphasis: {
              areaColor: '#2a333d'
            }
          }
        },
        series: [{
            name: '产值',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: function(val) {
              return val[2] / 1000;
            },
          tooltip:{
            formatter:function(param){
              var re='';
              re+=param.seriesName;
              re+='<br />';
              re+=param.name;
              re+='：';
              re+=param.value[2];
              re+='（亿元）';
              return re;
            }
          },
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                show: false
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: '#ddb926'
              }
            }
          },
          {
            name: 'Top5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data.sort(function(a, b) {
              return b.value - a.value;
            }).slice(0, 5)),
            symbolSize: function(val) {
              return val[2] / 1000;
            },
            tooltip:{
              formatter:function(param){
                var re='';
                re+=param.seriesName;
                re+='<br />';
                re+=param.name;
                re+='：';
                re+=param.value[2];
                re+='（亿元）';
                return re;
              }
            },

            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: '#f4e925',
                shadowBlur: 10,
                shadowColor: '#333'
              }
            },
            zlevel: 1
          },
          {
            id: 'bar',
            zlevel: 2,
            type: 'bar',
            symbol: 'none',
            itemStyle: {
              normal: {
                color: '#ddb926'
              }
            },
            data: ["76788", "27472", "21018", "16101", "14358", "13795", "12773", "10991", "10268", "9592", "7734", "5934", "4878", "4825", "4369", "3926", "3799", "3195", "2095", "1563"].reverse()
          }
        ]
      };
      if (option && typeof option === "object") {
        myChart.setOption(option, true);
      }
      var categoryData = ["物流", "建筑工程", "旅游", "公用事业", "电子", "石油石化", "房地产", "现代服务", "交通运输", "农业", "制造业", "矿业", "化工", "建材", "科研", "金融", "冶金", "能源", "TMT", "商贸"],
        barData = ["3799", "2095", "9592", "4369", "14358", "1563", "76788", "13795", "27472", "5934", "21018", "4825", "7734", "10991", "3195", "3926", "4878", "16101", "10268", "12773"];
      var geoData = [
        { name: '北京', value: 39012.85 },
        { name: '天津', value: 8302.38 },
        { name: '河北', value: 17861.16 },
        { name: '上海', value: 3532.65 },
        { name: '江苏', value: 29000.57 },
        { name: '浙江', value: 17449.61 },
        { name: '福建', value: 14408.89 },
        { name: '山东', value: 35350.57 },
        { name: '广东', value: 18040.56 },
        { name: '海南', value: 21110.31 },
        { name: '山西', value: 3894.62 },
        { name: '安徽', value: 15670.89 },
        { name: '江西', value: 1965.54 },
        { name: '河南', value: 22799.95 },
        { name: '湖北', value: 18263.52 },
        { name: '湖南', value: 14749.59 },
        { name: '内蒙古', value: 8668.87 },
        { name: '广西', value: 1053.35 },
        { name: '重庆', value: 8347.74 },
        { name: '四川', value: 18180.29 },
        { name: '贵州', value: 6889.63 },
        { name: '云南', value: 9021.46 },
        { name: '西藏', value: 873.79 },
        { name: '陕西', value: 11437.9 },
        { name: '甘肃', value: 3443.28 },
        { name: '青海', value: 1903.44 },
        { name: '宁夏', value: 1849.16 },
        { name: '新疆', value: 6339.3 },
        { name: '辽宁', value: 3708.6 },
        { name: '吉林', value: 7212.96 },
        { name: '黑龙江', value: 3743.29 }
      ];
      myChart.on("click", function(params) {
        if (params.componentSubType == "bar") {
          this.setOption({
            series: {
              name: 'Top5',
              data: convertData(geoData.sort(function(a, b) {
                return b.value - a.value;
              }).slice(0, 5)),
            }
          });
          if(params.name=="房地产"){
            vm.heatData=[
              [0,0,221],[0,1,953],[0,2,425],[0,3,444],[0,4,740],[0,5,738],[0,6,603],[0,7,1000],[0,8,380],[0,9,806],[0,10,809],[0,11,390],
              [1,0,183],[1,1,676],[1,2,402],[1,3,579],[1,4,427],[1,5,291],[1,6,118],[1,7,107],[1,8,803],[1,9,756],[1,10,838],[1,11,625],
              [2,0,713],[2,1,555],[2,2,243],[2,3,578],[2,4,599],[2,5,223],[2,6,222],[2,7,159],[2,8,335],[2,9,165],[2,10,484],[2,11,237],
              [3,0,147],[3,1,792],[3,2,732],[3,3,685],[3,4,366],[3,5,773],[3,6,592],[3,7,284],[3,8,234],[3,9,530],[3,10,283],[3,11,182],
              [4,0,105],[4,1,926],[4,2,170],[4,3,373],[4,4,194],[4,5,707],[4,6,730],[4,7,362],[4,8,703],[4,9,755],[4,10,303],[4,11,490],
              [5,0,236],[5,1,146],[5,2,818],[5,3,982],[5,4,377],[5,5,533],[5,6,529],[5,7,806],[5,8,884],[5,9,352],[5,10,963],[5,11,614],
              [6,0,777],[6,1,519],[6,2,551],[6,3,949],[6,4,316],[6,5,743],[6,6,620],[6,7,0],[6,8,0],[6,9,0],[6,10,0],[6,11,0]
            ];
          }else{
            vm.heatData=[
              [0,0,1135],[0,1,1691],[0,2,1611],[0,3,1800],[0,4,1369],[0,5,1159],[0,6,565],[0,7,1622],[0,8,695],[0,9,1672],[0,10,470],[0,11,1483],
              [1,0,1773],[1,1,1843],[1,2,1643],[1,3,1425],[1,4,758],[1,5,974],[1,6,1793],[1,7,1737],[1,8,1036],[1,9,1394],[1,10,1649],[1,11,815],
              [2,0,1816],[2,1,1205],[2,2,811],[2,3,1305],[2,4,1127],[2,5,916],[2,6,904],[2,7,1357],[2,8,1445],[2,9,738],[2,10,1855],[2,11,1128],
              [3,0,1464],[3,1,1124],[3,2,843],[3,3,1635],[3,4,1256],[3,5,1280],[3,6,1391],[3,7,468],[3,8,1824],[3,9,1310],[3,10,834],[3,11,318],
              [4,0,1036],[4,1,1965],[4,2,1952],[4,3,1575],[4,4,1389],[4,5,663],[4,6,332],[4,7,1887],[4,8,1128],[4,9,711],[4,10,1245],[4,11,1977],
              [5,0,320],[5,1,1360],[5,2,931],[5,3,1735],[5,4,1620],[5,5,908],[5,6,1958],[5,7,695],[5,8,1999],[5,9,519],[5,10,1398],[5,11,977],
              [6,0,1017],[6,1,1639],[6,2,1513],[6,3,1976],[6,4,1739],[6,5,655],[6,6,1788],[6,7,0],[6,8,0],[6,9,0],[6,10,0],[6,11,0]
            ];
          }
          vm.heatingPower();
          return;
        }
        barData = barData.sort();
        this.setOption({
          yAxis: {
            data: categoryData
          },
          xAxis: {
            axisLabel: { show: !!0 }
          },
          //            title: {
          //                id: 'statistic',
          //                text: count ? '平均: ' + (sum / count).toFixed(4) : ''
          //            },
          series: {
            id: 'bar',
            data: barData.sort(function(a, b) {
              return a - b;
            })
          }
        })
      })


      /* myChart.setOption({

      });*/
      myChart.setOption(option);
    },
    heatingPower() {
      let chinaDom = echarts.init(document.getElementsByClassName('fullView_heatingPower')[0]);

      var hours = ['1月', '2月', '3月', '4月', '5月', '6月',
        '7月', '8月', '9月','10月','11月','12月'];
      var days = ['2011', '2012', '2013',
        '2014', '2015', '2016', '2017'];
      /*房地产*/
//      var data = [
//        [0,0,221],[0,1,953],[0,2,425],[0,3,444],[0,4,740],[0,5,738],[0,6,603],[0,7,1000],[0,8,380],[0,9,806],[0,10,809],[0,11,390],
//        [1,0,183],[1,1,676],[1,2,402],[1,3,579],[1,4,427],[1,5,291],[1,6,118],[1,7,107],[1,8,803],[1,9,756],[1,10,838],[1,11,625],
//        [2,0,713],[2,1,555],[2,2,243],[2,3,578],[2,4,599],[2,5,223],[2,6,222],[2,7,159],[2,8,335],[2,9,165],[2,10,484],[2,11,237],
//        [3,0,147],[3,1,792],[3,2,732],[3,3,685],[3,4,366],[3,5,773],[3,6,592],[3,7,284],[3,8,234],[3,9,530],[3,10,283],[3,11,182],
//        [4,0,105],[4,1,926],[4,2,170],[4,3,373],[4,4,194],[4,5,707],[4,6,730],[4,7,362],[4,8,703],[4,9,755],[4,10,303],[4,11,490],
//        [5,0,236],[5,1,146],[5,2,818],[5,3,982],[5,4,377],[5,5,533],[5,6,529],[5,7,806],[5,8,884],[5,9,352],[5,10,963],[5,11,614],
//        [6,0,777],[6,1,519],[6,2,551],[6,3,949],[6,4,316],[6,5,743],[6,6,620],[6,7,0],[6,8,0],[6,9,0],[6,10,0],[6,11,0]
//      ];
      var data=this.heatData;
      /*交通运输*/
      var data2 = [
        [0,0,1135],[0,1,1691],[0,2,1611],[0,3,1800],[0,4,1369],[0,5,1159],[0,6,565],[0,7,1622],[0,8,695],[0,9,1672],[0,10,470],[0,11,1483],
        [1,0,1773],[1,1,1843],[1,2,1643],[1,3,1425],[1,4,758],[1,5,974],[1,6,1793],[1,7,1737],[1,8,1036],[1,9,1394],[1,10,1649],[1,11,815],
        [2,0,1816],[2,1,1205],[2,2,811],[2,3,1305],[2,4,1127],[2,5,916],[2,6,904],[2,7,1357],[2,8,1445],[2,9,738],[2,10,1855],[2,11,1128],
        [3,0,1464],[3,1,1124],[3,2,843],[3,3,1635],[3,4,1256],[3,5,1280],[3,6,1391],[3,7,468],[3,8,1824],[3,9,1310],[3,10,834],[3,11,318],
        [4,0,1036],[4,1,1965],[4,2,1952],[4,3,1575],[4,4,1389],[4,5,663],[4,6,332],[4,7,1887],[4,8,1128],[4,9,711],[4,10,1245],[4,11,1977],
        [5,0,320],[5,1,1360],[5,2,931],[5,3,1735],[5,4,1620],[5,5,908],[5,6,1958],[5,7,695],[5,8,1999],[5,9,519],[5,10,1398],[5,11,977],
        [6,0,1017],[6,1,1639],[6,2,1513],[6,3,1976],[6,4,1739],[6,5,655],[6,6,1788],[6,7,0],[6,8,0],[6,9,0],[6,10,0],[6,11,0]
      ];
      data = data.map(function (item) {
        return [item[1], item[0], item[2] || '-'];
      });

      var option = {
        title: {
          text: '产业热力图：  单位(亿元)'
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
          data: data,
          label: {
            normal: {
              show: true
            }
          },
          tooltip:{
            formatter:function(param){
              var re='';
              re+=param.seriesName;
              re+='<br />';
              re+=param.name;
              re+='：';
              re+=param.value[2];
              re+='（亿元）';
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
      let myChart = echarts.init(document.getElementsByClassName('fullView_two_left')[0]);
      let option = {
        title: {
          text: '产业雷达图：  单位(亿元)'
        },
        tooltip: {},
        legend: {
          show:false,
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
          indicator: [
            { name: '城投', max: 3000},
            { name: '物流', max: 26000},
            { name: '建筑工程', max: 25000},
            { name: '旅游', max: 20000},
          ]
        },
        series: [{
          name: '产业雷达图',
          type: 'radar',
          data : [
            {
              value : [1771, 16804, 16224, 18934]
            }
          ]
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
        tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter:function(param){
            var re='',param=param[0];
            re+=param.name;
            re+='<br />';
            re+='企业';
            re+='：';
            re+=param.value;
            re+='（家）';
            return re;
          }
        },
        legend: {
          data:['产业组合产值']
        },
        grid: {
          show:false,
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis : {
          type : 'value',
          axisTick : {show: false},
          axisLabel:{
            show:false
          }
        },
        yAxis : {
          type : 'category',
          position:'right',
          axisTick : {show: false},
          axisLabel: {
            show:true,
          },
          data : ['地产+金融+物流+服务+商贸','地产+金融+健康','旅游+电商+金融','矿业+运输+化工+设备制造+电力','文化+地产+现代服务','地产+健康+教育+服务'].reverse()
        },
        series : [
          {
            name:'产业组合产值',
            type:'bar',
            label: {
              normal: {
                show: true,
                position: 'inside'
              }
            },
            data:[90665, 83837 , 83132, 71332, 54072, 50001].reverse()
          }
        ]
      };
      ;
      if (option && typeof option === "object") {
        myChart.setOption(option, true);
      }
      myChart.on("click",function (param) {
        console.log(param.name)
        vm.$router.push({ path:'groupList'})
      });
      myChart.setOption(option);
    }
  },
  mounted() {
    let vm = this;
    vm.distribution();
    vm.heatingPower();
    vm.radar();
    vm.barList();
  }
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

</style>
