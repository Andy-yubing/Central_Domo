<template>
    <div class="warPer">
      <div class="wbg">
        <p>产业全国分布</p>
      </div>
      <div class="wbg">
        <div class="bottom_line">
          选择地区
        </div>
        <ul class="area clearFix">
          <a href="javascript:;" v-for="(area,index) in areas">
            <li  @click="addClass(index)" :class="{active:oneCode==index}">{{area}}</li>
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
        </ul>a

        <ul class="con_msg">
          <li v-for="list in this.message">
            <div class="has_float">{{list.name}}</div>
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
              name:'39分生态改革文件相继出台“任务清单”落实',
              website:' http://www.chyxx.com/zhengce/201708/551216.html',
              time:'8/15'
            },
            {
              name:'39分生态改革文件相继出台“任务清单”落实',
              website:' http://www.chyxx.com/zhengce/201708/551216.html',
              time:'8/15'
            },
            {
              name:'39分生态改革文件相继出台“任务清单”落实',
              website:' http://www.chyxx.com/zhengce/201708/551216.html',
              time:'8/15'
            },
            {
              name:'39分生态改革文件相继出台“任务清单”落实',
              website:' http://www.chyxx.com/zhengce/201708/551216.html',
              time:'8/15'
            },
            {
              name:'39分生态改革文件相继出台“任务清单”落实',
              website:' http://www.chyxx.com/zhengce/201708/551216.html',
              time:'8/15'
            },
            {
              name:'39分生态改革文件相继出台“任务清单”落实',
              website:' http://www.chyxx.com/zhengce/201708/551216.html',
              time:'8/15'
            }
          ],
          areas:[
            '北京市','黑龙江市','上海市','重庆市','山西省','浙江省','湖南省','云南省','河北省','吉林省'
          ],
          times:[
            '全部','今日','昨日','一周','30天'
          ],
          oneCode:0,
          timeCode:0
        };
      },
      methods:{
        addClass(index){
          this.oneCode = index
        },
        addTimeClass(index){
          this.timeCode = index
        }
      }
    }
</script>

<style lang="scss">
  .warPer{
    width: 1200px;
    float: left;
  }
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
  .con_msg{
    margin-top: 20px;
    li:nth-of-type(odd){
      background-color: #f1f4fc;
    }
    li{
      list-style: disc;
      line-height: 40px;
      height: 40px;
      .has_float{
        text-align: center;
        width: 33%;
        display: inline-block;
        font-size: 12px;
      }
    }
    li:hover{
      color:#3047BF
    }
  }
  .active{
    background-color: #2d7662;
    color: white;
  }

</style>
