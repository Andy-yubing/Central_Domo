<template>
    <div>
      <div></div>
      <div class="wbg">
        热点信息
      </div>
      <div class="hot clearFix">
        <div class="hot_text" v-for="msg in hotMassages">
          <h3 class="little_top">{{msg.tittle}}</h3>
          <p class="little_top little_text">发布时间：{{msg.time}}来源：{{msg.from}}</p>
          <p class="hot_content little_top little_text">{{msg.content}}</p>
        </div>
        <div class="hot_list">
          <div class="list_title">相关热词</div>
          <ul>
            <li class="hot_item" v-for="hot in AboutHot">{{hot}}</li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>

  export default {
    data() {
      return {
        hotMassages:[
          {
            tittle:"中小企业局局长解读《关于开展支持中小企业参与“一带一路”建设专项行动的通知》",
            time:"2017-08-04 15:25:04 ",
            from:"工信部网站",
            content:"日前，工业和信息化部、中国国际贸易促进委员会联合印发《关于开展支持中小企业参与“一带一路”建设专项行动的通知》（工信部联企业〔2017〕191号，以下简称《通知》），旨在促进我国中小企业加强与“一带一路”沿线各国的经济技术合作和贸易投资往来，支持中小企业“走出去”“引进来”。一、文件出台背景推进“一带一路”建设，是党中央、国务院根据全球形势变化和我国发展面临的新形势、新任务，统筹国内国际两个大局作出的重大战略决策。截至2016年底，已有100多个国家表达了对共建“一带一路”倡议的支持和参与意愿，中国与39个国家和国际组织签署了46份共建“一带一路”合作协议，涵盖互联互通、产能、投资、经贸、金融、科技、社会、人文、民生、海洋等合作领域。中国对“一带一路”沿线国家投资累计超过500亿美元，中国企业已经在20多个国家建设56个经贸合作区，累计投资超过185亿美元。2014年至2016年，中国同“一带一路”沿线国家贸易总额超过3万亿美元，在加强经贸合作的同时也促进了沿线国家和地区间民众的交流、理解与互信，实现了“民心相通”。2017年5月14日，习近平总书记在“一带一路”国际合作高峰论坛上指出“推进‘一带一路’建设，要聚焦发展这个根本性问题，释放各国发展潜力，实现经济大融合、发展大联动、成果大共享”。习近平总书记强调，“要深入开展产业合作，加强国际产能和装备制造合作，抓住新工业革命的发展新机遇，培育新业态，保持经济增长活力”。中小企业不仅是中国经济社会发展的重要力量也是“一带一路”沿线各国经济繁荣发展的重要基石。当前，随着经济全球化不断深入发展，中小企业日益成为对外合作的主力军，是世界各国对外经贸关系中最重要的合作领域之一。随着“一带一路”建设的不断推进，鼓励和支持我国中小企业参与“一带一路”建设，将为我国中小企业带来新的发展机遇和广阔的发展空间。"
          }
        ],
        AboutHot:['一带一路','抵制韩货']
      };
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
        padding: 10px 5px 50px;
        .hot_item{
          text-align: left;
          padding: 10px 20px;
        }
      }
    }
  }
</style>
