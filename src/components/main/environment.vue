<template>
  <div>
    <div></div>
    <div class="wbg">
      政策信息
    </div>
    <div class="hot clearFix">
      <div class="hot_text" v-for="msg in hotMassages">
        <h3 class="little_top">{{msg.tittle}}</h3>
        <p class="little_top little_text">来源：{{msg.Ifrom}} </p>
        <p class="little_top little_text">发布时间：{{msg.time}} 作者：{{msg.from}} -{{msg.number}}人浏览</p>
        <p class="hot_content little_top little_text">{{msg.content}}</p>
      </div>
      <div class="hot_list">
        <div class="list_title">相关产业</div>
        <ul>
          <a href="javascript:;"  v-for="(Hot,index) in AboutHot">
            <li class="hot_item" @click="addClass(index)" :class="{active:oneCode==index}"> {{Hot}}</li>
          </a>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        oneCode:0,
        hotMassages:[
          {
            tittle:"《关于进一步引导和规范境外投资方向的指导意见》",
            time:"2017年08月15日 17:20",
            Ifrom:"http://www.chyxx.com/zhengce/201708/551216.html 2017年08月15日",
            from:"中原",
            number:'1000',
            content:" 为加快黑龙江冰雪运动装备、冰雪场地装备等冰雪装备产业发展，打造冰雪经济新产业，建设冰雪经济强省，近日，经黑龙江省政府同意，黑龙江省发改委制定了《黑龙江省冰雪装备产业发展规划(2017—2022年)》(以下简称《规划》)。《规划》提出，到2020年，黑龙江冰上运动装备产业形成新优势，雪上运动装备产业初具规模，引进一批国内外知名的企业和品牌，培育若干位居国内同行业前列的冰雪装备骨干企业，《规划》主要内容包括：加大财税政策支持，推动落实多项奖励和补助措施;加大投资政策支持，黑龙江省财政在现有的政策和资金框架内适当倾斜;加大人才政策支持，奖励有突出贡献的冰雪装备科技人才;鼓励有条件的大中小学校采用多种方式设立滑冰、滑雪等冰雪场地;将冰雪运动项目列入冬季体育课堂教学内容;将冰雪项目纳入体育考试内容;建立冰雪装备产业发展领导小组，负责全省冰雪装备产业发展的统筹协调和整体推进。《规划》中还特别指出，到2022年，以哈尔滨、齐齐哈尔、牡丹江等地为重点，建成三个以上冰雪装备专业化产业园，实现主营业务收入40亿元以上。加大人才政策支持，奖励有突出贡献的冰雪装备科技人才，允许高校、科研院所设立一定比例的流动岗位，吸引具有创新实践经验的冰雪装备研发企业家、科技人才兼职。"
          }
        ],
        AboutHot:['城投','物流','旅游','机械','矿业','化工']
      };
    },
    methods:{
      addClass(index){
        this.oneCode = index
      }
    }
  }
</script>

<style lang="scss" scoped>
  .little_text{
    color: #B4B4B4;
    font-size: 14px;
  }
  .little_top{
    margin-top: 10px;
  }
  .hot{
    text-align: center;
    .hot_text{
      float: left;
      width:67.5%;
      background-color: white;
      margin-right: 2%;
      padding: 30px 80px;
      .hot_content{
        text-align: left;
        line-height: 25px;
      }
    }
    .hot_list{
      float: left;
      width:18%;
      background-color: white;
      .list_title{
        height: 60px;
        background-color: #2d7662;
        line-height: 60px;
        color: white;
      }
      ul{
        padding: 10px 5px 150px;
        .hot_item{
          width: 19%;
          float: left;
          text-align: center;
          padding: 5px 10px;
          border-radius: 5px;
          margin: 5px;
          font-size: 14px ;
          color: black;
        }
        .active{
          background-color: #2d7662;
          color: white;
        }
      }
    }
  }

</style>
