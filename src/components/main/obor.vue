<template>
    <div class="warPer clearFix">
      <div class="one test">
        一带一路
      </div>
      <div class="one test">
        热词云图
      </div>

      <div class="one clearFix">
        <div class="top10 clearFix">
          <span class="t_tittle">国家排行top10</span>
          <a href="javascript:;" class="more">更多</a>
          <ul class="company clearFix">
            <li class="first">
              <div>国家名称</div>
              <div>净额(亿)</div>
              <div>存量(亿)</div>
            </li>
            <li v-for="item in company">
              <div>{{item.name}}</div>
              <div>{{item.area}}</div>
              <div>{{item.number}}</div>
            </li>
          </ul>
        </div>
        <div class="top10 top_r clearFix">
          <span class="t_tittle">企业排行top10</span>
          <a href="javascript:;" class="more">更多</a>
          <ul class="company clearFix">
            <li class="first">
              <div>企业名称</div>
              <div>规模</div>
              <div>投资金额(亿)</div>
            </li>
            <li v-for="item in company">
              <div>{{item.name}}</div>
              <div>{{item.area}}</div>
              <div>{{item.number}}</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="one">
        <span class="t_tittle">热点头条</span>
        <a href="javascript:;" class="more">更多</a>
        <div class="line"></div>
        <ul class="new_list">
          <li v-for= "item in News">
            <h3>{{item.tittle}}</h3>
            <p class="list_content">{{item.content}}</p>
            <p class="list_time">{{item.time}}</p>
          </li>
        </ul>
      </div>
      <div class="one">
        <span class="t_tittle">相关政策</span>
        <a href="javascript:;" class="more">更多</a>
        <div class="line"></div>
        <ul class="new_list">
          <li v-for= "item in News">
            <h3>{{item.tittle}}</h3>
            <p class="list_content">{{item.content}}</p>
            <p class="list_time">{{item.time}}</p>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
      data(){
        return{
          company:[
            {
              name:'波兰',
              area:'4555',
              number:'56412',
            },
            {
              name:'立陶宛',
              area:'5242',
              number:'56412',
            },
            {
              name:'爱沙尼亚',
              area:'452452',
              number:'56412',
            },
            {
              name:'拉脱维亚',
              area:'452452',
              number:'56412',
            },
            {
              name:'日本',
              area:'452',
              number:'56412',
            },
            {
              name:'韩国',
              area:'452',
              number:'56412',
            },
            {
              name:'马来西亚',
              area:'452',
              number:'56412',
            },
            {
              name:'尼泊尔',
              area:'7578',
              number:'56412',
            },
            {
              name:'哈萨克斯坦',
              area:'35242',
              number:'56412',
            },
            {
              name:'日内瓦',
              area:'7875',
              number:'45452',
            }
          ],
          News:[
            {
              tittle:'中小企业局局长解读《关于开展支持中小企业参与“一带一路”建设专项行动的通知》',
              content:'第十六届“汉语桥”世界大学生中文比赛总决赛暨闭幕式12日晚在湖南长沙举行。经过激烈角逐，来自苏丹的选手赵之行脱颖而出，夺得本届“汉语桥”比赛的总冠军，并荣获“汉语之星”的称号。',
              time:'2017-08-14'
            },
            {
              tittle:'第十六届“汉语桥”世界大学生中文比赛闭幕 苏丹选手摘冠',
              content:'第十六届“汉语桥”世界大学生中文比赛总决赛暨闭幕式12日晚在湖南长沙举行。经过激烈角逐，来自苏丹的选手赵之行脱颖而出，夺得本届“汉语桥”比赛的总冠军，并荣获“汉语之星”的称号。',
              time:'2017-08-14'
            },
            {
              tittle:'第十六届“汉语桥”世界大学生中文比赛闭幕 苏丹选手摘冠',
              content:'第十六届“汉语桥”世界大学生中文比赛总决赛暨闭幕式12日晚在湖南长沙举行。经过激烈角逐，来自苏丹的选手赵之行脱颖而出，夺得本届“汉语桥”比赛的总冠军，并荣获“汉语之星”的称号。',
              time:'2017-08-14'
            }
          ]
        }
      }
    }
</script>

<style lang="scss">
  .warPer{
    background-color: #f7f7f7;
    .test{
      height: 500px;
    }
    .one{
      width: 100%;
      background-color: white;
      margin-bottom: 20px;
      position: relative;
      padding-top: 20px;
      padding-bottom: 20px;
      .new_list{
        width: 95%;
        margin: 0 auto;
        li{
          border-bottom: 1px dashed #999;
          margin-bottom: 10px;
          p{
            display: block;
            margin-top: 10px;
            margin-bottom: 10px;
            font-size: 14px;
          }
          .list_content{
            color: #999;
          }
          .list_time{
            text-align: right;
          }
        }
      }
      .line{
        width: 100%;
        height: 2px;
        background-color: #999999;
        margin-top: 20px;
        margin-bottom: 20px;
      }
    }
    .top10{
      width: 49%;
      background-color: white;
      float: left;
      padding-top: 20px;
      position: relative;
      .company{
        margin-top: 30px;
        .first{

        }
        div{
          width: 33.33%;
        }
      }
    }
    .top_r{
      float: right;
    }
    .t_tittle{
      display: inline-block;
      font-size: 16px;
      font-weight: bold;
      margin-left: 20px;
    }
    .more{
      position: absolute;
      top: 20px;
      right:20px;
      color: #999;
    }
  }
</style>
