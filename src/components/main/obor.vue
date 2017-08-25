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
              <div>{{item.city}}</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="one">
        <span class="t_tittle">热点头条</span>
        <a href="javascript:;" class="more">更多</a>
        <div class="line"></div>
        <ul class="new_list">
          <li v-for= "item in hots">
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
              name:'中工国际',
              area:'大型',
              number:'425873',
              city:'也门、印度、赞比亚'
            },
            {
              name:'中国建筑',
              area:'大型',
              number:'47589',
              city:'哈萨克斯、巴基斯坦、肯尼亚、'
            },
            {
              name:'中国电建',
              area:'大型',
              number:'35211',
              city:'哈萨克斯坦、埃塞俄比亚、巴基斯坦'
            },
            {
              name:'葛洲坝',
              area:'大型',
              number:'22431',
              city:'埃塞俄比亚、埃塞俄比亚、埃塞俄比亚'
            },
            {
              name:'中国中铁',
              area:'大型',
              number:'12779',
              city:'埃塞亚的斯、马来西亚、孟加拉'
            },
            {
              name:'北方国际',
              area:'大型',
              number:'6370',
              city:'埃塞俄比亚'
            },
            {
              name:'阿里',
              area:'大型',
              number:'2342',
              city:'也门 印度 赞比亚'
            },
            {
              name:'中国中冶',
              area:'大型',
              number:'1182',
              city:'越南 科威特'
            },
            {
              name:'中材国际',
              area:'大型',
              number:'8775',
              city:'伊拉克、东帝汶、印尼'
            },
            {
              name:'中国交建',
              area:'大型',
              number:'6695',
              city:'巴基斯坦 马来西亚 新加坡'
            }
          ],
          cityes:[
            {
              name:'缅甸',
              area:'33172',
              number:'425873',
            },
            {
              name:'埃塞俄比亚',
              area:'5421',
              number:'47589',
            },
            {
              name:'波兰',
              area:'2510',
              number:'35211',
            },
            {
              name:'捷克',
              area:'-1741',
              number:'22431',
            },
            {
              name:'斯洛伐克',
              area:'0',
              number:'12779',
            },
            {
              name:'阿塞拜疆',
              area:'136',
              number:'6370',
            },
            {
              name:'克罗地亚',
              area:'0',
              number:'1182',
            },
            {
              name:'波黑',
              area:'162',
              number:'775',
            },
            {
              name:'阿尔巴尼亚',
              area:'0',
              number:'695',
            },
            {
              name:'马其顿',
              area:'-1',
              number:'211',
            }
          ],
          hots:[
            {
              tittle:'刘云山：抓住“一带一路”机遇 扩大出版合作领域',
              content:'中共中央政治局常委、中央书记处书记刘云山在参观第24届北京国际图书博览会时强调，要深入学习贯彻习近平总书记系列重要讲话精神和治国理政新理念新思想新战略，树立高度的文化自信，保持强烈的文化担当，坚持导向为魂、质量为先、创新为要，推动我国加快实现从出版大国向出版强国迈进。',
              time:'2017-08-14'
            },
            {
              tittle:'张高丽访科威特：将“丝绸城和五岛”作为共建“一带一路”对接点',
              content:'8月22日，应邀访问科威特的中共中央政治局常委、国务院副总理张高丽在科威特城会见科威特埃米尔萨巴赫。',
              time:'2017-08-14'
            },
            {
              tittle:'首届中国国际进口博览会筹备委员会第一次会议举行',
              content:'国务院副总理汪洋24日在京主持召开首届中国国际进口博览会筹备委员会第一次会议。他强调，举办中国国际进口博览会，是以习近平同志为核心的党中央着眼推进新一轮高水平对外开放作出的一项重大决策',
              time:'2017-08-14'
            }
          ],
          News:[
            {
              tittle:'《自由贸易试验区外商投资备案管理办法（试行）》解读',
              content:'2015年4月8日，商务部印发2015年第12号公告，发布《自由贸易试验区外商投资备案管理办法（试行）》。近日，商务部外国投资管理司负责人就《办法》进行了解读。',
              time:'2017-08-14'
            },
            {
              tittle:'《中欧班列建设发展规划(2016-2020年)》解读',
              content:'经推进“一带一路”建设工作会议审议通过，推进“一带一路”建设工作领导小组办公室日前印发了《中欧班列建设发展规划（2016-2020年）》，全面部署未来5年中欧班列建设发展任务。这是中欧班列建设发展的首个顶层设计。',
              time:'2017-08-14'
            },
            {
              tittle:'中小企业局局长解读《关于开展支持中小企业参与“一带一路”建设专项行动的通知》',
              content:'日前，工业和信息化部、中国国际贸易促进委员会联合印发《关于开展支持中小企业参与“一带一路”建设专项行动的通知》（工信部联企业〔2017〕191号，以下简称《通知》），旨在促进我国中小企业加强与“一带一路”沿线各国的经济技术合作和贸易投资往来，支持中小企业“走出去”“引进来”。',
              time:'2017-08-14'
            }
          ]
        }
      }
    }
</script>

<style lang="scss" scoped>
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
