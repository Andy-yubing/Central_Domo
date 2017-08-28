<template>
    <div class="warPer clearFix">
      <div class="wbg">
        <p>产业全国分布</p>
      </div>
      <div class="wbg">
        <div class="bottom_line">
          选择地区
        </div>
        <ul class="area clearFix">
          <a href="javascript:;" v-for="(area,index) in areas">
            <li  @click="addClass(index)" :class="{active:area.flag}">{{area.name}}</li>
          </a>
        </ul>
      </div>
      <div class="wbg">
        <div class="bottom_line">
          产业类型
        </div>
        <ul class="area clearFix">
          <a href="javascript:;" v-for="(type,index) in types">
            <li @click="addTypeClass(index)" :class="{active:type.flag}">{{type.name}}</li>
          </a>
        </ul>
      </div>
      <div class="wbg">
        <div class="bottom_line">
          选择日期
        </div>
        <ul class="area clearFix">
          <a href="javascript:;" v-for="(time,index) in times">
            <li  @click="addTimeClass(index)" :class="{active:timeCode==index}">{{time}}</li>
          </a>
          <div class="block">
            <span class="demonstration"></span>
            <el-date-picker
              v-model="value1"
              type="date"
              placeholder="自定义"
              size="small"
              :picker-options="pickerOptions0">
            </el-date-picker>
          </div>
        </ul>
        <ul class="con_msg">
          <li v-for="list in this.message">
            <div class="has_float text_left">{{list.name}}</div>
            <div class="has_float">{{list.website}}</div>
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
              name:'39分生态改革文件相继出台“任务清单”落实',
              website:' http://www.chyxx.com/zhengce/201708/551216.html',
              time:'8/15'
            },
            {
              name:'关于印发城乡建设抗震防灾“十三五”规划的通知',
              website:' http://www.chyxx.com/zhengce/201708/551216.html',
              time:'8/15'
            },
            {
              name:'关于印发建材工业发展规划（2016－2020年）的通知',
              website:' http://www.chyxx.com/zhengce/201708/551216.html',
              time:'8/15'
            },
            {
              name:'关于印发建筑节能与绿色建筑发展“十三五”规划的通知',
              website:' http://www.chyxx.com/zhengce/201708/551216.html',
              time:'8/15'
            },
            {
              name:'关于印发建筑业发展“十三五”规划的通知',
              website:' http://www.chyxx.com/zhengce/201708/551216.html',
              time:'8/15'
            },
            {
              name:'于印发农家乐（民宿）建筑防火导则（试行）的通知',
              website:' http://www.chyxx.com/zhengce/201708/551216.html',
              time:'8/15'
            },
            {
              name:'8、关于印发《工程建设标准涉及专利管理办法》的通知',
              website:' http://www.chyxx.com/zhengce/201708/551216.html',
              time:'8/15'
            }
          ],
          areas:[
            {name:'黑龙江省',flag:false},{name:'广东省',flag:false},{name:'北京市',flag:false},{name:'上海市',flag:false},{name:'香港特别行政区',flag:false},{name:'浙江省',flag:false},{name:'山西省',flag:false},{name:'云南省',flag:false},{name:'河北省',flag:false},{name:'吉林省',flag:false},
            {name:'江西省',flag:false},{name:'河南省',flag:false},{name:'内蒙古自治区',flag:false},{name:'安徽省',flag:false},{name:'西藏自治区',flag:false},{name:'天津市',flag:false},{name:'青海省',flag:false},{name:'宁夏回族自治区 ',flag:false},{name:'新疆维吾尔自治区',flag:false},
            {name:'河北省',flag:false},{name:'江苏省',flag:false},{name:'湖北省',flag:false},{name:'贵州省',flag:false},{name:'辽宁省',flag:false},{name:'福建省',flag:false},{name:'广西壮族自治区',flag:false},{name:'陕西省',flag:false},{name:'甘肃省',flag:false},{name:'澳门特别行政区',flag:false},{name:'台湾省',flag:false}
          ],
          types:[
            {name:'建材',flag:false},{name:'机械',flag:false},{name:'旅游',flag:false},{name:'建筑工程',flag:false},{name:'公众事业',flag:false},{name:'电子',flag:false},{name:'石油石化',flag:false},{name:'军工',flag:false},
            {name:'投资',flag:false},{name:'新能源',flag:false},{name:'TMT',flag:false},{name:'农业',flag:false},{name:'电力',flag:false},{name:'煤炭',flag:false},{name:'矿业',flag:false},{name:'化工',flag:false},
            {name:'地产',flag:false},{name:'科研',flag:false},{name:'金融',flag:false},{name:'冶金',flag:false},{name:'物流',flag:false},{name:'现代服务',flag:false},{name:'商贸',flag:false},{name:'城投',flag:false},{name:'交通运输',flag:false},{name:'其他',flag:false}
          ],
          times:[
            '全部','今日','昨日','一周','30天'
          ],
          oneCode:0,
          timeCode:0,
          typeCode:0,
        };
      },
      methods:{
        addClass(index){
          for(let i=0;i<this.areas.length;i++){
            if(i == index){
              if(this.areas[i].flag){
                this.areas[i].flag = false
              }else{
                this.areas[i].flag = true
              }
            }
          }
        },
        addTimeClass(index){
          this.timeCode = index
        },
        addTypeClass(index){
          for(let i=0;i<this.types.length;i++){
            if(i == index){
              if(this.types[i].flag){
                this.types[i].flag = false
              }else{
                this.types[i].flag = true
              }
            }
          }
        }
      }
    }
</script>

<style lang="scss" scoped>
  .area{
    width: 100%;
    li{
      margin: 5px;
      padding: 0 10px;
      float: left;
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
  .con_msg{
    margin-top: 20px;
    li:nth-of-type(odd){
      background-color: #f1f4fc;
    }
    li{
      line-height: 40px;
      height: 40px;
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
      color:#355699
    }
  }


</style>
