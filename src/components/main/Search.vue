<template>
  <div class="search wbg clearFix">
    <div class="label">
      <span>新能源</span>
      <span>建筑工程</span>
      <span class="label_btn">+标签订阅</span>
    </div>
    <input type="text" placeholder="请输入搜索内容" class="search_box"><!--
    --><div class="search_btn" @click="search"><a href="javascript:;">搜索</a></div>

    <ul class="company">
      <li class="first">
        <div>企业名称</div>
        <div>区域</div>
        <div>规模</div>
        <div>行业</div>
        <div>企业性质</div>
        <div>操作</div>
      </li>
      <li v-for="item in company" v-show="isShow">
        <div>{{item.name}}</div>
        <div>{{item.area}}</div>
        <div>{{item.number}}</div>
        <div>{{item.business}}</div>
        <div>{{item.property}}</div>
        <div>
          <a href="javascript:;">
            <span class="item_btn">对标</span>
          </a>
          <a href="javascript:;">
            <span class="item_btn">关注</span>
          </a>
        </div>
      </li>
      <li v-show="isHide">暂无数据。。。。</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data(){
        return {
          isShow:false,
          isHide:true,
          company:[
            {
              name:'中国中材集团有限公司',
              area:'河北省',
              number:'50-100人',
              business:'建材',
              property:'国有及国有控股企业'
            },
            {
              name:'中科点击有限公司',
              area:'北京市',
              number:'50-100人',
              business:'技术',
              property:'国有及国有控股企业'
            },
            {
              name:'中科点击有限公司',
              area:'北京市',
              number:'50-100人',
              business:'技术',
              property:'国有及国有控股企业'
            },
            {
              name:'中科点击有限公司',
              area:'北京市',
              number:'50-100人',
              business:'技术',
              property:'国有及国有控股企业'
            },
            {
              name:'中科点击有限公司',
              area:'北京市',
              number:'50-100人',
              business:'技术',
              property:'国有及国有控股企业'
            }
          ]
        }
    },
    methods:{
      search(){
        setTimeout(()=>{
          this.isShow=true
        },1000)
        this.isHide=false
      }
    }
  }
</script>

<style lang="scss">
  .search{
    .label{
      margin: 100px 100px 50px;
      .label_btn{
        display: inline-block;
        height: 30px;
        width: 100px;
        background-color: green;
        color: white;
        border-radius: 10px;
        line-height: 30px;
        text-align: center;
      }
      span{
        margin: 0 20px;
        color: green;
      }
    }
    .search_box{
      display: inline-block;
      width:70%;
      height: 42px;
      border: 1px solid #999;
      margin-left: 100px;
    }
    .search_btn{
      display: inline-block;
      width: 100px;
      height: 44px;
      background-color: green;
      line-height: 40px;
      text-align: center;
       a{
        color: white;
      }
    }
    .company{
      margin-top: 100px;
      width:100%;
      height: 50px;
      background-color: #355699;
      text-align: center;
      line-height: 50px;
      .first{
        color: white;
      }
      li:nth-of-type(even){
        background-color: #f1f4fc;
      }
      li{
        float: left;
        width: 100%;
        div{
          float: left;
          width: 16.66%;

          .item_btn{
            display: inline-block;
            width: 50px;
            height: 25px;
            background-color: #2d7662;
            border-radius: 5px;
            line-height: 25px;
            text-align: center;
            font-size: 12px;
            color: white;
          }
        }
      }
    }
  }


</style>
