<template>
  <div class="warPer">
    <div class="wbg">
      <p>产业全国布局</p>
    </div>
    <div class="wbg">
      <div class="bottom_line">
        产业组合
      </div>
      <ul class="area clearFix"  id="list">
        <a href="javascript:;" v-for="(time,index) in times">
            <li  @click="addTimeClass(index)" :class="{active:time.flag}">{{time.name}}</li>
        </a>
      </ul>
      <ul class="con_msg">
        <div class="bottom_line">
          匹配企业
        </div>
        <li class="first">
          <div>企业名称</div>
          <div>区域</div>
          <div>规模</div>
          <div>企业性质</div>
        </li>
        <li v-for="list in this.message">
          <div class="has_float">{{list.name}}</div>
          <div class="has_float">{{list.website}}</div>
          <div class="has_float">{{list.size}}</div>
          <div class="has_float">{{list.time}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Vue  from 'vue'
  import Element from 'element-ui'
  Vue.use(Element)
  export default {
    data() {
      return {
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        pickerOptions1: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        message:[
          {
            name:'百联集团',
            website:'上海',
            size:' 大型',
            time:'国有企业'
          },
          {
            name:'海尔集团 ',
            website:'山东',
            size:' 大型',
            time:'私营企业'
          },
          {
            name:'华润集团',
            website:'深圳',
            size:' 大型',
            time:'国有企业'
          },
          {
            name:'远洋集团',
            website:'北京',
            size:' 大型',
            time:'国有企业'
          },
          {
            name:'中国华源',
            website:'上海',
            size:' 大型',
            time:'私营企业'
          }],
        areas:[
          {name:'黑龙江省',flag:false},{name:'广东省',flag:false},{name:'北京市',flag:false},{name:'上海市',flag:false},{name:'香港特别行政区',flag:false},{name:'浙江省',flag:false},{name:'山西省',flag:false},{name:'云南省',flag:false},{name:'河北省',flag:false},{name:'吉林省',flag:false},
          {name:'江西省',flag:false},{name:'河南省',flag:false},{name:'内蒙古自治区',flag:false},{name:'安徽省',flag:false},{name:'西藏自治区',flag:false},{name:'天津市',flag:false},{name:'青海省',flag:false},{name:'宁夏回族自治区 ',flag:false},{name:'新疆维吾尔自治区',flag:false},
          {name:'河北省',flag:false},{name:'江苏省',flag:false},{name:'湖北省',flag:false},{name:'贵州省',flag:false},{name:'辽宁省',flag:false},{name:'福建省',flag:false},{name:'广西壮族自治区',flag:false},{name:'陕西省',flag:false},{name:'甘肃省',flag:false},{name:'澳门特别行政区',flag:false},{name:'台湾省',flag:false}
        ],
        times:[
          {name:'地产',flag:false},{name:'煤炭',flag:false},{name:'旅游',flag:false},{name:'建筑工程',flag:false},{name:'公众事业',flag:false},{name:'电子',flag:false},{name:'石油石化',flag:false},{name:'军工',flag:false},
          {name:'投资',flag:false},{name:'新能源',flag:false},{name:'TMT',flag:false},{name:'农业',flag:false},{name:'电力',flag:false},{name:'机械',flag:false},{name:'矿业',flag:false},{name:'化工',flag:false},
          {name:'建材',flag:false},{name:'科研',flag:false},{name:'金融',flag:false},{name:'冶金',flag:false},{name:'物流',flag:false},{name:'现代服务',flag:false},{name:'商贸',flag:false},{name:'城投',flag:false},{name:'交通运输',flag:false},{name:'服务',flag:false},{name:'其他',flag:false},
        ],
        oneCode:[],
        timeCode:0,
        flagIndex:0
      };
    },
    methods:{
      addTimeClass(index){
        var arrs=[[1,2,3,4],[2,6,8],[9,3,14],[20,2,16]];
        this.timeCode = index;
        if(this.timeCode == 1){
          this.message=[
            {
              name:'神华集团',
              website:'北京',
              size:' 大型',
              time:'国有企业'
            },
            {
              name:'五矿集团 ',
              website:'北京',
              size:' 大型',
              time:'国有企业'
            },
            {
              name:'中国中煤能源集团',
              website:'北京',
              size:' 大型',
              time:'国有企业'
            },
            {
              name:'山西焦煤集团有限责任公司',
              website:'山西',
              size:' 大型',
              time:'国有企业'
            },
            {
              name:'冀中能源集团有限责任公司',
              website:'河北',
              size:' 大型',
              time:'国有企业'
            }]
        }else{
          this.message=[
            {
              name:'万科企业股份有限公司',
              website:'深圳',
              size:' 大型',
              time:'私营企业'
            },
            {
              name:'保利房地产集团',
              website:'广州',
              size:' 大型',
              time:'国有企业'
            },
            {
              name:'绿地控股集团有限公司',
              website:'上海',
              size:' 大型',
              time:'国有控股'


            },
            {
              name:'中国海外发展有限公司',
              website:'香港',
              size:' 大型',
              time:'国有控股'
            },
            {
              name:'恒大地产集团有限公司',
              website:'北京',
              size:' 大型',
              time:'私营企业'
            }
          ]
        }
        var arr=arrs[index];
        var currentItem=this.areas;
        for(var i in currentItem){
          currentItem[i].flag=false;
          for(var j in arr){
            if(i==arr[j]){
              currentItem[arr[j]].flag=true;
            }
          }
        }
      },
      active(){
        var currentItem=this.times;
        for(var i in currentItem){
          currentItem[i].flag=false;
          if(currentItem[i].name ==="地产"){
            currentItem[i].flag=true;
          }
          if(currentItem[i].name ==="金融"){
            currentItem[i].flag=true;
          }
          if(currentItem[i].name ==="物流"){
            currentItem[i].flag=true;
          }
          if(currentItem[i].name ==="服务"){
            currentItem[i].flag=true;
          }
          if(currentItem[i].name ==="商贸"){
            currentItem[i].flag=true;
          }
        }
      }
    },
    mounted(){
      this.active()
    }
  }
</script>

<style lang="scss" scoped>

  .bottom_line{
    height: 50px;
    width: 100%;
    line-height: 50px;
    border-bottom: 1px solid #999;
    margin-bottom: 20px;
  }
  .area{
    width: 100%;
    li{
      float: left;
      margin: 5px 0 0 10px;
      padding: 5px 10px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      border-radius: 5px;
    }
    a{
      color: black;
    }
    .block{
      padding-top: 5px;
    }
  }
  .con_msg{
    margin-top: 20px;
    li:nth-of-type(odd){
      background-color: #f1f4fc;
    }
    .first{
      div{
        float: left;
        width: 25%;
        text-align: left;
        background-color: #2d7662;
        color: white;

      }
    }
    li{
      // list-style: disc;
      line-height: 40px;
      height: 40px;
      .has_float{
        text-align: left;
        width: 24%;
        display: inline-block;
        font-size: 14px;
      }
    }

  }
  .active{
    background-color: #2d7662;
    color: white;
  }

</style>
