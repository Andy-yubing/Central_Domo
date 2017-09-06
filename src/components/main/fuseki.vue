<template>
  <div class="warPer clearFix">
    <div class="wbg">
      <div class="bottom_line">
        <span>筛选条件:</span>
        <div class="R_box">
            <el-button type="primary" @click="dialogFormVisible = true">企业对标</el-button>
            <el-dialog title="添加对标企业" :visible.sync="dialogFormVisible">
              <el-form :model="form">
                <el-form-item label="企业名称" :label-width="formLabelWidth">
                  <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <router-link :to="{path:`/body/fusekiList/6`,query:{formName:form.name}}">
                  <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                </router-link>
              </div>
            </el-dialog>
        </div>
      </div>
      <div class="clearFix classify">
        <div class="left_box">行业分类：</div>
        <div class="right_check">
          <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
          <div style="margin: 15px 0;"></div>
          <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
      <div class="clearFix classify">
        <div class="left_box">企业性质：</div>
        <div class="right_check">
          <el-checkbox :indeterminate="isIndeterminate2" v-model="checkAll2" @change="handleCheckAllChange2">全选</el-checkbox>
          <div style="margin: 15px 0;"></div>
          <el-checkbox-group v-model="checkedCities2" @change="handleCheckedCitiesChange2">
            <el-checkbox v-for="city in cities2" :label="city" :key="city">{{city}}</el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
      <div class="clearFix classify">
        <div class="left_box">企业规模：</div>
        <div class="right_check">
          <el-checkbox :indeterminate="isIndeterminate3" v-model="checkAll3" @change="handleCheckAllChange3">全选</el-checkbox>
          <div style="margin: 15px 0;"></div>
          <el-checkbox-group v-model="checkedCities3" @change="handleCheckedCitiesChange3">
            <el-checkbox v-for="city in cities3" :label="city" :key="city">{{city}}</el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
      <div class="bottom_line">
        选择地区
      </div>
      <ul class="area clearFix">
        <a href="javascript:;" v-for="(area,index) in areas">
          <li  @click="addClass(index)" :class="{active:area.flag}">{{area.name}}</li>
        </a>
      </ul>
    </div>
   <div class="wbg clearFix">
     <ul class="company">
       <li class="first">
         <div>企业名称</div>
         <div>区域</div>
         <div>规模</div>
         <div>行业</div>
         <div>企业性质</div>
         <div>操作</div>
       </li>
       <li v-for="item in company">
         <div>{{item.name}}</div>
         <div>{{item.area}}</div>
         <div>{{item.number}}</div>
         <div>{{item.business}}</div>
         <div>{{item.property}}</div>
         <div>
           <router-link :to="{path:`/body/fusekiList/${item.id}`,query:{item:item}}">
             <span class="item_btn">对标</span>
           </router-link>
           <a href="javascript:;">
             <span class="item_btn">关注</span>
           </a>
         </div>
       </li>
     </ul>
   </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Element from 'element-ui'
  Vue.use(Element)
  const Options = ['城投', '物流', '旅游', '建筑工程','公用事业','电子', '石油化工', '房地产','现代服务', '机械','矿业'];
  const Options2 = ['中外合资企业', '私营企业', '国有及国有控股企业', '外商独资企业','其它'];
  const Options3 = ['20人以下', '20-99人', '100-499人', '500-999人','1000-9999人','10000人以上', '不限'];
  export default {
    data() {
      return {
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',

        checkAll: true,
        checkedCities: [],
        cities: Options,
        isIndeterminate: true,
        checkAll2: true,
        checkedCities2: [],
        cities2: Options2,
        isIndeterminate2: true,

        checkAll3: true,
        checkedCities3: [],
        cities3: Options3,
        isIndeterminate3: true,
        areas:[
          {name:'黑龙江省',flag:false},{name:'广东省',flag:false},{name:'北京市',flag:false},{name:'上海市',flag:false},{name:'香港特别行政区',flag:false},{name:'浙江省',flag:false},{name:'山西省',flag:false},{name:'云南省',flag:false},{name:'河北省',flag:false},{name:'吉林省',flag:false},
          {name:'江西省',flag:false},{name:'河南省',flag:false},{name:'内蒙古自治区',flag:false},{name:'安徽省',flag:false},{name:'西藏自治区',flag:false},{name:'天津市',flag:false},{name:'青海省',flag:false},{name:'宁夏回族自治区 ',flag:false},{name:'新疆维吾尔自治区',flag:false},
          {name:'河北省',flag:false},{name:'江苏省',flag:false},{name:'湖北省',flag:false},{name:'贵州省',flag:false},{name:'辽宁省',flag:false},{name:'福建省',flag:false},{name:'广西壮族自治区',flag:false},{name:'陕西省',flag:false},{name:'甘肃省',flag:false},{name:'澳门特别行政区',flag:false},{name:'台湾省',flag:false}
        ],
        oneCode:0,
        company:[
          {
            id:1,
            name:'万科企业股份有限公司',
            area:'深圳',
            number:'1000-9999人',
            business:'地产',
            property:'私营企业'
          },
          {
            id:2,
            name:'保利房地产集团',
            area:'广州',
            number:'1000-9999人',
            business:'地产',
            property:'国有企业'
          },
          {
            id:3,
            name:'绿地控股集团有限公司',
            area:'上海',
            number:'1000-9999人',
            business:'地产',
            property:'国有控股'
          },
          {
            id:4,
            name:'中国海外发展有限公司',
            area:'香港',
            number:'1000-9999人',
            business:'地产',
            property:'国有控股'
          },
          {
            id:5,
            name:'恒大地产集团有限公司',
            area:'北京',
            number:'1000-9999人',
            business:'地产',
            property:'私营企业'
          }
        ],
        isActive:false
      };
    },
    methods: {
      handleCheckAllChange(event) {
        this.checkedCities = event.target.checked ? Options : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      },

      handleCheckAllChange2(event) {
        this.checkedCities2 = event.target.checked ? Options2 : [];
        this.isIndeterminate2 = false;
      },
      handleCheckedCitiesChange2(value) {
        let checkedCount = value.length;
        this.checkAll2 = checkedCount === this.cities2.length;
        this.isIndeterminate2 = checkedCount > 0 && checkedCount < this.cities2.length;
      },

      handleCheckAllChange3(event) {
        this.checkedCities3 = event.target.checked ? Options3 : [];
        this.isIndeterminate3 = false;
      },
      handleCheckedCitiesChange3(value) {
        let checkedCount = value.length;
        this.checkAll3 = checkedCount === this.cities3.length;
        this.isIndeterminate3 = checkedCount > 0 && checkedCount < this.cities3.length;
      },
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

    }
  }
</script>

<style lang="scss" scoped>
  .left_box{
    float: left;
    margin-right: 20px;
  }
  .right_check{
    float: left;
    width:90%;
  }
  .classify{
    margin: 20px 0;
  }
  .company{
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
  .area{
    width: 100%;
    li{
      float: left;
      padding: 0 15px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      border-radius: 10px;
      margin:5px;
    }
    a{
      color: black;
    }
    .block{
      padding-top: 5px;
    }
  }

</style>
