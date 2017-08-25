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
          name: '39分生态改革文件相继出台“任务清单”落实',
          website: '',
          time: '8/15'
        },
        {
          name: '39分生态改革文件相继出台“任务清单”落实',
          website: '',
          time: '8/15'
        },
        {
          name: '39分生态改革文件相继出台“任务清单”落实',
          website: '',
          time: '8/15'
        },
        {
          name: '39分生态改革文件相继出台“任务清单”落实',
          website: '',
          time: '8/15'
        },
        {
          name: '39分生态改革文件相继出台“任务清单”落实',
          website: '',
          time: '8/15'
        },
        {
          name: '39分生态改革文件相继出台“任务清单”落实',
          website: '',
          time: '8/15'
        }
      ],
      list: [{
          btn: '煤炭行业',
          name: '国美新集',
          website: '',
          time: '8/15'
        },
        {
          btn: '能源行业',
          name: '西山煤业',
          website: '',
          time: '8/15'
        },
        {
          btn: '能源行业',
          name: '西山煤业',
          website: '',
          time: '8/15'
        },
        {
          btn: '能源行业',
          name: '西山煤业',
          website: '',
          time: '8/15'
        },
        {
          btn: '能源行业',
          name: '西山煤业',
          website: '',
          time: '8/15'
        },
        {
          btn: '能源行业',
          name: '西山煤业',
          website: '',
          time: '8/15'
        },

      ],
    }
  },
  methods: {
    distribution() {
      let chinaDom = document.getElementsByClassName('fullView_china')[0];
      var myChart = echarts.init(chinaDom);
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

      var convertedData = [
        convertData(data),
        convertData(data.sort(function(a, b) {
          return b.value - a.value;
        }).slice(0, 5))
      ];

     let option = {
        series: [{
          type: 'map',
          map: 'china'
        }],
        backgroundColor: '#404a59',
        animation: true,
        animationDuration: 1000,
        animationEasing: 'cubicInOut',
        animationDurationUpdate: 1000,
        animationEasingUpdate: 'cubicInOut',
        title: [{
            text: '产业全国布局',
            subtext: '',
            sublink: '',
            left: 'center',
            textStyle: {
              color: '#fff'
            }
          },
          {
            id: 'statistic',
            right: 120,
            top: 40,
            width: 100,
            textStyle: {
              color: '#fff',
              fontSize: 16
            }
          }
        ],
        toolbox: {
          iconStyle: {
            normal: {
              borderColor: '#fff'
            },
            emphasis: {
              borderColor: '#b1e4ff'
            }
          }
        },
        brush: {
          outOfBrush: {
            color: '#abc'
          },
          brushStyle: {
            borderWidth: 2,
            color: 'rgba(0,0,0,0.2)',
            borderColor: 'rgba(0,0,0,0.5)',
          },
          seriesIndex: [0, 1],
          throttleType: 'debounce',
          throttleDelay: 300,
          geoIndex: 0
        },
        geo: {
          map: 'china',
          left: '10',
          right: '35%',
          center: [117.98561551896913, 31.205000490896193],
          zoom: 2.5,
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
        tooltip: {
          trigger: 'item'
        },
        grid: {
          right: 40,
          top: 100,
          bottom: 40,
          width: '30%'
        },
        xAxis: {
          type: 'value',
          scale: true,
          position: 'top',
          boundaryGap: false,
          splitLine: { show: false },
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: { margin: 2, textStyle: { color: '#aaa' } },
        },
        yAxis: {
          type: 'category',
          name: 'TOP 20',
          nameGap: 16,
          axisLine: { show: false, lineStyle: { color: '#ddd' } },
          axisTick: { show: false, lineStyle: { color: '#ddd' } },
          axisLabel: { interval: 0, textStyle: { color: '#ddd' } },
          data: []
        },
        series: [{
            name: '产值',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertedData[0],
            symbolSize: function(val) {
              return val[2] / 1000;
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
              normal: {
                color: '#ddb926'
              }
            }
          },
          {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertedData[1],
            symbolSize: function(val) {
              return val[2] / 1000;
            },
            showEffectOn: 'emphasis',
            rippleEffect: {
              brushType: 'stroke'
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
            data: []
          }
        ]
      };

      myChart.on('brushselected', renderBrushed);

      setTimeout(function() {
        myChart.dispatchAction({
          type: 'brush',
          areas: [{
            geoIndex: 0,
            brushType: 'polygon',
            coordRange: [
              [119.72, 34.85],
              [119.68, 34.85],
              [119.5, 34.84],
              [119.19, 34.77],
              [118.76, 34.63],
              [118.6, 34.6],
              [118.46, 34.6],
              [118.33, 34.57],
              [118.05, 34.56],
              [117.6, 34.56],
              [117.41, 34.56],
              [117.25, 34.56],
              [117.11, 34.56],
              [117.02, 34.56],
              [117, 34.56],
              [116.94, 34.56],
              [116.94, 34.55],
              [116.9, 34.5],
              [116.88, 34.44],
              [116.88, 34.37],
              [116.88, 34.33],
              [116.88, 34.24],
              [116.92, 34.15],
              [116.98, 34.09],
              [117.05, 34.06],
              [117.19, 33.96],
              [117.29, 33.9],
              [117.43, 33.8],
              [117.49, 33.75],
              [117.54, 33.68],
              [117.6, 33.65],
              [117.62, 33.61],
              [117.64, 33.59],
              [117.68, 33.58],
              [117.7, 33.52],
              [117.74, 33.5],
              [117.74, 33.46],
              [117.8, 33.44],
              [117.82, 33.41],
              [117.86, 33.37],
              [117.9, 33.3],
              [117.9, 33.28],
              [117.9, 33.27],
              [118.09, 32.97],
              [118.21, 32.7],
              [118.29, 32.56],
              [118.31, 32.5],
              [118.35, 32.46],
              [118.35, 32.42],
              [118.35, 32.36],
              [118.35, 32.34],
              [118.37, 32.24],
              [118.37, 32.14],
              [118.37, 32.09],
              [118.44, 32.05],
              [118.46, 32.01],
              [118.54, 31.98],
              [118.6, 31.93],
              [118.68, 31.86],
              [118.72, 31.8],
              [118.74, 31.78],
              [118.76, 31.74],
              [118.78, 31.7],
              [118.82, 31.64],
              [118.82, 31.62],
              [118.86, 31.58],
              [118.86, 31.55],
              [118.88, 31.54],
              [118.88, 31.52],
              [118.9, 31.51],
              [118.91, 31.48],
              [118.93, 31.43],
              [118.95, 31.4],
              [118.97, 31.39],
              [118.97, 31.37],
              [118.97, 31.34],
              [118.97, 31.27],
              [118.97, 31.21],
              [118.97, 31.17],
              [118.97, 31.12],
              [118.97, 31.02],
              [118.97, 30.93],
              [118.97, 30.87],
              [118.97, 30.85],
              [118.95, 30.8],
              [118.95, 30.77],
              [118.95, 30.76],
              [118.93, 30.7],
              [118.91, 30.63],
              [118.91, 30.61],
              [118.91, 30.6],
              [118.9, 30.6],
              [118.88, 30.54],
              [118.88, 30.51],
              [118.86, 30.51],
              [118.86, 30.46],
              [118.72, 30.18],
              [118.68, 30.1],
              [118.66, 30.07],
              [118.62, 29.91],
              [118.56, 29.73],
              [118.52, 29.63],
              [118.48, 29.51],
              [118.44, 29.42],
              [118.44, 29.32],
              [118.43, 29.19],
              [118.43, 29.14],
              [118.43, 29.08],
              [118.44, 29.05],
              [118.46, 29.05],
              [118.6, 28.95],
              [118.64, 28.94],
              [119.07, 28.51],
              [119.25, 28.41],
              [119.36, 28.28],
              [119.46, 28.19],
              [119.54, 28.13],
              [119.66, 28.03],
              [119.78, 28],
              [119.87, 27.94],
              [120.03, 27.86],
              [120.17, 27.79],
              [120.23, 27.76],
              [120.3, 27.72],
              [120.42, 27.66],
              [120.52, 27.64],
              [120.58, 27.63],
              [120.64, 27.63],
              [120.77, 27.63],
              [120.89, 27.61],
              [120.97, 27.6],
              [121.07, 27.59],
              [121.15, 27.59],
              [121.28, 27.59],
              [121.38, 27.61],
              [121.56, 27.73],
              [121.73, 27.89],
              [122.03, 28.2],
              [122.3, 28.5],
              [122.46, 28.72],
              [122.5, 28.77],
              [122.54, 28.82],
              [122.56, 28.82],
              [122.58, 28.85],
              [122.6, 28.86],
              [122.61, 28.91],
              [122.71, 29.02],
              [122.73, 29.08],
              [122.93, 29.44],
              [122.99, 29.54],
              [123.03, 29.66],
              [123.05, 29.73],
              [123.16, 29.92],
              [123.24, 30.02],
              [123.28, 30.13],
              [123.32, 30.29],
              [123.36, 30.36],
              [123.36, 30.55],
              [123.36, 30.74],
              [123.36, 31.05],
              [123.36, 31.14],
              [123.36, 31.26],
              [123.38, 31.42],
              [123.46, 31.74],
              [123.48, 31.83],
              [123.48, 31.95],
              [123.46, 32.09],
              [123.34, 32.25],
              [123.22, 32.39],
              [123.12, 32.46],
              [123.07, 32.48],
              [123.05, 32.49],
              [122.97, 32.53],
              [122.91, 32.59],
              [122.83, 32.81],
              [122.77, 32.87],
              [122.71, 32.9],
              [122.56, 32.97],
              [122.38, 33.05],
              [122.3, 33.12],
              [122.26, 33.15],
              [122.22, 33.21],
              [122.22, 33.3],
              [122.22, 33.39],
              [122.18, 33.44],
              [122.07, 33.56],
              [121.99, 33.69],
              [121.89, 33.78],
              [121.69, 34.02],
              [121.66, 34.05],
              [121.64, 34.08]
            ]
          }]
        });
      }, 0);

      function renderBrushed(params) {
        var mainSeries = params.batch[0].selected[0];

        var selectedItems = [];
        var categoryData = [];
        var barData = [];
        var maxBar = 30;
        var sum = 0;
        var count = 0;

        for (var i = 0; i < mainSeries.dataIndex.length; i++) {
          var rawIndex = mainSeries.dataIndex[i];
          var dataItem = convertedData[0][rawIndex];
          var pmValue = dataItem.value[2];

          sum += pmValue;
          count++;

          selectedItems.push(dataItem);
        }

        selectedItems.sort(function(a, b) {
          return a.value[2] - b.value[2];
        });

        for (var i = 0; i < Math.min(selectedItems.length, maxBar); i++) {
          categoryData.push(selectedItems[i].name);
          barData.push(selectedItems[i].value[2]);
        }

        this.setOption({
          yAxis: {
            data: categoryData
          },
          xAxis: {
            axisLabel: { show: !!count }
          },
          title: {
            id: 'statistic',
            text: count ? '平均: ' + (sum / count).toFixed(4) : ''
          },
          series: {
            id: 'bar',
            data: barData
          }
        });
      }


      /* myChart.setOption({
          
      });*/
      myChart.setOption(option);
    },
    heatingPower() {
      let chinaDom = echarts.init(document.getElementsByClassName('fullView_heatingPower')[0]);


      var hours = ['12月', '1月', '2月', '3月', '4月', '5月', '6月',
        '7月', '8月', '9月', '10月', '11月',
        '12月', '1月', '2月', '3月', '4月', '5月',
        '6月', '7月', '8月', '9月', '10月', '11月'
      ];
      var days = ['2011', '2012', '2013',
        '2014', '2015', '2016', '2017'
      ];

      var data = [
        [0, 0, 5],
        [0, 1, 1],
        [0, 2, 0],
        [0, 3, 0],
        [0, 4, 0],
        [0, 5, 0],
        [0, 6, 0],
        [0, 7, 0],
        [0, 8, 0],
        [0, 9, 0],
        [0, 10, 0],
        [0, 11, 2],
        [0, 12, 4],
        [0, 13, 1],
        [0, 14, 1],
        [0, 15, 3],
        [0, 16, 4],
        [0, 17, 6],
        [0, 18, 4],
        [0, 19, 4],
        [0, 20, 3],
        [0, 21, 3],
        [0, 22, 2],
        [0, 23, 5],
        [1, 0, 7],
        [1, 1, 0],
        [1, 2, 0],
        [1, 3, 0],
        [1, 4, 0],
        [1, 5, 0],
        [1, 6, 0],
        [1, 7, 0],
        [1, 8, 0],
        [1, 9, 0],
        [1, 10, 5],
        [1, 11, 2],
        [1, 12, 2],
        [1, 13, 6],
        [1, 14, 9],
        [1, 15, 11],
        [1, 16, 6],
        [1, 17, 7],
        [1, 18, 8],
        [1, 19, 12],
        [1, 20, 5],
        [1, 21, 5],
        [1, 22, 7],
        [1, 23, 2],
        [2, 0, 1],
        [2, 1, 1],
        [2, 2, 0],
        [2, 3, 0],
        [2, 4, 0],
        [2, 5, 0],
        [2, 6, 0],
        [2, 7, 0],
        [2, 8, 0],
        [2, 9, 0],
        [2, 10, 3],
        [2, 11, 2],
        [2, 12, 1],
        [2, 13, 9],
        [2, 14, 8],
        [2, 15, 10],
        [2, 16, 6],
        [2, 17, 5],
        [2, 18, 5],
        [2, 19, 5],
        [2, 20, 7],
        [2, 21, 4],
        [2, 22, 2],
        [2, 23, 4],
        [3, 0, 7],
        [3, 1, 3],
        [3, 2, 0],
        [3, 3, 0],
        [3, 4, 0],
        [3, 5, 0],
        [3, 6, 0],
        [3, 7, 0],
        [3, 8, 1],
        [3, 9, 0],
        [3, 10, 5],
        [3, 11, 4],
        [3, 12, 7],
        [3, 13, 14],
        [3, 14, 13],
        [3, 15, 12],
        [3, 16, 9],
        [3, 17, 5],
        [3, 18, 5],
        [3, 19, 10],
        [3, 20, 6],
        [3, 21, 4],
        [3, 22, 4],
        [3, 23, 1],
        [4, 0, 1],
        [4, 1, 3],
        [4, 2, 0],
        [4, 3, 0],
        [4, 4, 0],
        [4, 5, 1],
        [4, 6, 0],
        [4, 7, 0],
        [4, 8, 0],
        [4, 9, 2],
        [4, 10, 4],
        [4, 11, 4],
        [4, 12, 2],
        [4, 13, 4],
        [4, 14, 4],
        [4, 15, 14],
        [4, 16, 12],
        [4, 17, 1],
        [4, 18, 8],
        [4, 19, 5],
        [4, 20, 3],
        [4, 21, 7],
        [4, 22, 3],
        [4, 23, 0],
        [5, 0, 2],
        [5, 1, 1],
        [5, 2, 0],
        [5, 3, 3],
        [5, 4, 0],
        [5, 5, 0],
        [5, 6, 0],
        [5, 7, 0],
        [5, 8, 2],
        [5, 9, 0],
        [5, 10, 4],
        [5, 11, 1],
        [5, 12, 5],
        [5, 13, 10],
        [5, 14, 5],
        [5, 15, 7],
        [5, 16, 11],
        [5, 17, 6],
        [5, 18, 0],
        [5, 19, 5],
        [5, 20, 3],
        [5, 21, 4],
        [5, 22, 2],
        [5, 23, 0],
        [6, 0, 1],
        [6, 1, 0],
        [6, 2, 0],
        [6, 3, 0],
        [6, 4, 0],
        [6, 5, 0],
        [6, 6, 0],
        [6, 7, 0],
        [6, 8, 0],
        [6, 9, 0],
        [6, 10, 1],
        [6, 11, 0],
        [6, 12, 2],
        [6, 13, 1],
        [6, 14, 3],
        [6, 15, 4],
        [6, 16, 0],
        [6, 17, 0],
        [6, 18, 0],
        [6, 19, 0],
        [6, 20, 1],
        [6, 21, 2],
        [6, 22, 2],
        [6, 23, 6]
      ];

      data = data.map(function(item) {
        return [item[1], item[0], item[2] || '-'];
      });

      let option = {
        tooltip: {
          position: 'top'
        },
        animation: false,
        grid: {
          height: '50%',
          y: '10%'
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
          min: 0,
          max: 10,
          calculable: true,
          orient: 'horizontal',
          left: 'center',
          bottom: '15%'
        },
        series: [{
          name: 'Punch Card',
          type: 'heatmap',
          data: data,
          label: {
            normal: {
              show: true
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
      chinaDom.setOption(option);
    },
    radar() {
      let myChart = echarts.init(document.getElementsByClassName('fullView_two_left')[0]);
      let option = {
        title: {
          text: '基础雷达图'
        },
        tooltip: {},
        legend: {
          data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
        },
        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              color: '#000',
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
            { name: '销售（sales）', max: 6500 },
            { name: '管理（Administration）', max: 16000 },
            { name: '信息技术（Information Techology）', max: 30000 },
            { name: '客服（Customer Support）', max: 38000 },
            { name: '研发（Development）', max: 52000 },
            { name: '市场（Marketing）', max: 25000 }
          ]
        },
        series: [{
          name: '预算 vs 开销（Budget vs spending）',
          type: 'radar',
          // areaStyle: {normal: {}},
          data: [{
              value: [4300, 10000, 28000, 35000, 50000, 19000],
              name: '预算分配（Allocated Budget）'
            },
            {
              value: [5000, 14000, 28000, 31000, 42000, 21000],
              name: '实际开销（Actual Spending）'
            }
          ]
        }]
      };
      myChart.setOption(option);
    },
    barList() {
      let myChart = echarts.init(document.getElementsByClassName('fullView_two_right')[0]);

      //app.title = '世界人口总量 - 条形图'; 

      let option = {

        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['2012年']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
        },
        series: [

          {
            name: '2012年',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, 681807]
          }
        ]
      };


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
