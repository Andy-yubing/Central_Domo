<template>
    <div class="warPer clearFix">
      <div class="one test">
        <div class="by">
          <span class="circle"></span>
          <span class="hide_text">
            <p>单位:万美元</p>
            <p>2015净额:705.25</p>
            <p>2015存量:377.25</p>
          </span>
        </div>
        <div class="md">
          <span class="circle"></span>
          <span class="hide_text">
            <p>单位:万美元</p>
            <p>2015净额:823.24</p>
            <p>2015存量:425.25</p>
          </span>
        </div>
      </div>
      <div class="one test1">

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
            <li v-for="item in cityes">
              <div>{{item.name}}</div>
              <div>{{item.area}}</div>
              <div>{{item.number}}</div>
            </li>
          </ul>
        </div>

      </div>
      <div class="one clearFix">
        <div class="top10 clearFix" id="top_r">
          <span class="t_tittle">企业排行top10</span>
          <a href="javascript:;" class="more">更多</a>
          <ul class="company clearFix">
            <li class="first clearFix">
              <div>企业名称</div>
              <div>规模</div>
              <div>投资金额(亿)</div>
              <div>国家</div>
            </li>
            <li v-for="item in company" class="clearFix">
              <div>{{item.name}}</div>
              <div>{{item.area}}</div>
              <div>{{item.number}}</div>
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
              name:'淘宝',
              area:'大型',
              number:'56412',
              city:'也门 印度 赞比亚'
            },
            {
              name:'腾讯',
              area:'大型',
              number:'56412',
              city:'也门 印度 赞比亚'
            },
            {
              name:'美团',
              area:'大型',
              number:'3434',
              city:'也门 印度 赞比亚'
            },
            {
              name:'中科',
              area:'大型',
              number:'34342',
              city:'也门 印度 赞比亚'
            },
            {
              name:'华夏',
              area:'大型',
              number:'678678',
              city:'也门 印度 赞比亚'
            },
            {
              name:'亚信',
              area:'大型',
              number:'8964',
              city:'也门 印度 赞比亚'
            },
            {
              name:'阿里',
              area:'大型',
              number:'2342',
              city:'也门 印度 赞比亚'
            },
            {
              name:'微软',
              area:'大型',
              number:'4587',
              city:'也门 印度 赞比亚'
            },
            {
              name:'索尼',
              area:'大型',
              number:'56412',
              city:'也门 印度 赞比亚'
            },
            {
              name:'联想',
              area:'大型',
              number:'45452',
              city:'也门 印度 赞比亚'
            }
          ],
          cityes:[
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
      background:url("../../images/dt.png") no-repeat center;
      background-size: 100% 100%;
      position: relative;
      .circle{
        display: inline-block;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: yellow;
      }
      .hide_text{
        display: none;
        width: 100px;
        height: 80px;
        background-color: #434343;
        border-radius: 10px;
        position: absolute;
        left: 28px;
        top: 20px;
        opacity: 0.8;
        color: white;
        line-height: 20px;
        font-size: 12px;
        padding: 10px 10px 0 10px ;
      }
      .by:hover .hide_text{
        display: inline-block;
      }
      .md:hover .hide_text{
        display: inline-block;
      }
      .by{
        position: absolute;
        top: 337px;
        left: 182px;
      }
      .md{
        position: absolute;
        top: 225px;
        right: 360px;
      }
    }
    .test1{
      height: 400px;
      background:url("../../images/obr.png") no-repeat center;
      background-size: 100% 100%;
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
      width: 100%;
      background-color: white;
      padding-top: 20px;
      position: relative;
      .company{
        margin-top: 30px;
        li{
          height: 50px;
          line-height: 50px;
        }
        li:not(:first-child):hover {
          background: #C8ECC8;
        }
        li:nth-of-type(even){
          background-color: #f1f4fc;
        }
        .first{
          background-color: #273967;
          color: white;
        }
        div{
          width: 33.33%;
          float: left;
          text-align: center;
        }
      }
    }
    #top_r{
      width: 100%;
      li{
        div{
          width: 25%;
        }
      }
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
