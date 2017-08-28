<template>
  <div class="search wbg clearFix">
    <div class="label">
      <span v-for="tabName in tabNames">{{tabName}}</span>
      <el-button type="primary"  @click="dialogFormVisible = true" class="label_btn">+标签订阅</el-button>
      <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="*标签名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" auto-complete="off"  placeholder="请输入标签名称，长度为2-4个字符"></el-input>
          </el-form-item>
          <el-form-item label="*关键词" :label-width="formLabelWidth">
            <el-input v-model="form.region" auto-complete="off"  placeholder="请输入关键词，多个关键词用逗号隔开"></el-input>
          </el-form-item>
        </el-form>

        <div style="margin: 15px 25px;">
          <el-checkbox-group v-model="checkboxGroup1" fill='#2d7662' text-color="#ffffff">
            产业类型：<el-checkbox-button v-for="TMT in TMTs" :label="TMT" :key="TMT">{{TMT}}</el-checkbox-button>
          </el-checkbox-group>
        </div>
        <div style="margin: 15px 25px;">
          <!--地区分布：
          <div style="margin: 15px 0;"></div>
          <el-checkbox-group v-model="checkedCities"  @change="handleCheckedCitiesChange" fill='#2d7662' text-color="#ffffff">
            <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
          </el-checkbox-group>-->
          <div style="margin: 15px 0;">
            地区分布：<el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
          </div>
          <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox class="m_left" v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
          </el-checkbox-group>

        </div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false" class="label_btn">取 消</el-button>
          <el-button type="primary" @click="addName" class="label_btn">确 定</el-button>
        </div>
      </el-dialog>
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
  import Elementui from 'element-ui'
  const TMTOptions = ['城投', '金融', '物流', '电子','房地产', '现代服务', '农业', '其他'];
  const cityOptions = ['北京市','天津市','河北省','山西省','辽宁省','吉林省','青海省','黑龙江省','上海市','重庆市','江苏省','海南省','浙江省','河南省','四川省','安徽省','内蒙古自治区','广东省','贵州省','甘肃省'];
  export default {
    data(){
        return {
          checkboxGroup1: ['上海'],
          TMTs: TMTOptions,

          checkAll: true,
          checkedCities: ['上海', '北京'],
          cities: cityOptions,
          isIndeterminate: true,
          dialogFormVisible: false,
          form: {
            name: '',
            region: '',
            delivery: false,
            type: [],
          },
          formLabelWidth: '120px',
          isShow:false,
          isHide:true,
          company:[
            {
              name:'万科企业股份有限公司',
              area:'深圳',
              number:'1000-9999人',
              business:'地产',
              property:'私营企业'
            },
            {
              name:'保利房地产集团',
              area:'广州',
              number:'1000-9999人',
              business:'地产',
              property:'国有企业'
            },
            {
              name:'绿地控股集团有限公司',
              area:'上海',
              number:'1000-9999人',
              business:'地产',
              property:'国有控股'
            },
            {
              name:'中国海外发展有限公司',
              area:'香港',
              number:'1000-9999人',
              business:'地产',
              property:'国有控股'
            },
            {
              name:'恒大地产集团有限公司',
              area:'北京',
              number:'1000-9999人',
              business:'地产',
              property:'私营企业'
            }
          ],
          tabNames:['新能源','建筑工程']
        }
    },
    methods:{
      search(){
        setTimeout(()=>{
          this.isShow=true
        },1000)
        this.isHide=false
      },
      addName(){
        this.dialogFormVisible = false
        var name = this.form.name.trim()
        if(name){
          for(var i=0;i<this.tabNames.length;i++){
            var tabName = this.tabNames[i].trim()
            if(name === tabName){
              alert('不能添加同样的标签')
              this.form.name = ''
              return
            }
          }
          this.tabNames.push(name)
          name = ''
        }else{
          alert('输入不能为空')
          name = '';
        }

      },
      handleCheckAllChange(event) {
        this.checkedCities = event.target.checked ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
    }
  }
</script>

<style lang="scss" scoped>
    .m_left{
      margin-left: 4px;
    }
    .search{
    .label{
      margin: 100px 100px 50px;
      .label_btn{
        background-color: #2d7662;
        border: 1px solid #2d7662;
        color:white;
      }
      span{
        margin: 0 20px;
        color: #2d7662;
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
      background-color: #2d7662;
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
      background-color: #2d7662;
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
