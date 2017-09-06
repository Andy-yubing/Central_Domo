<template>
    <div>
      <div class="wbg">
        <span>对标企业:</span>
        <span class="corp">{{item}}</span>
        VS
        <span class="corp" v-show="isHas" v-for="corp in corps">{{corp}}</span>
        <el-button type="primary" class="g_bg" @click="dialogFormVisible = true">添加对标企业</el-button>
        <el-dialog title="添加对标企业" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="企业名称" :label-width="formLabelWidth">
              <el-input v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="addCompany">确 定</el-button>
          </div>
        </el-dialog>

        <span class="down g_btn">下载</span>
        <div class="text">最多只能选三家企业对标，更多请开通套餐</div>
      </div>
      <div class="wbg">
        <span>对标类型:</span>
        <a href="javascript:;"
           class="g_btn"
           v-for="(tittle,index) in tittles"
           @click="addClass(index)"
           :class="{active1:oneCode==index}"
        >{{tittle}}
        </a>
      </div>
      <div  class="x_tu">
        <div id="tu1" style="width: 100%;height:300px;"></div>
      </div>
      <div  class="x_tu">
        <div id="tu2" style="width: 100%;height:300px;"></div>
      </div>
      <div  class="x_tu">
        <div id="tu3" style="width: 100%;height:300px;"></div>
      </div>
      <div  class="x_tu">
        <div id="tu4" style="width: 100%;height:300px;"></div>
      </div>
      <div  class="d_tu">
        <div id="tu5" class="center_tu" style="width: 70%;height:300px;"></div>
      </div>

    </div>
</template>

<script>
    import echarts from 'echarts'
    import Element from  'element-ui'
    import data from '../data/data.json'
    export default {
      data(){
        return{
          tittles:['人员结构','组织结构','员工效率'],
          oneCode:0,
          dialogTableVisible: false,
          dialogFormVisible: false,
          form: {
            name: '',
            region: '',
            delivery: false,
            type: [],
          },
          formLabelWidth: '120px',
          corps:[],
          isHas:false,
          arr:[],
          color:'',
          manage:[],
          schooling:[],
          name:'',
          job:[],
          jobName:'',
          jobTittle:[],
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
          item:'',
        }
      },
      methods:{
        addClass(index){
          this.oneCode = index
        },
        addCompany(){
         this.dialogFormVisible = false
          if(this.form.name){
           for(var i=0;i<data.length;i++){
             if(this.form.name == data[i][0]){
               this.arr = data[i][1].age
               this.color = data[i][1].color
               this.manage = data[i][2].manage
               this.schooling = data[i][3].schooling
               this.job = data[i][4].job
               this.jobName = data[i][4].name
               this.jobTittle = data[i][5].jobTittle
               this.Play()
             }
           }
            for(var i=0;i<this.corps.length;i++){
              if(this.corps.length >= 2){
                alert('最多匹配三家企业')
                return
              }
            }
            this.corps.push(this.form.name)
            this.isHas = true
            this.form.name = ''
          }
          console.log(this.form.name)

        },
        Play(){
          var myChart = echarts.init(document.getElementById('tu1'));
          var option = {
            title: {
              text: '年龄分布对比'
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            tooltip : {
              trigger: 'axis',
              axisPointer: {
                type: 'cross',
                label: {
                  backgroundColor: '#6a7985'
                }
              }
            },
            legend: {
              right:20,
              data: [this.item,this.form.name]
            },
            xAxis : [
              {
                type : 'category',
                boundaryGap : false,
                data : ['0-10岁','10-20岁','20-30岁','30-40岁','40-50岁','50-60岁','60-70岁']
              }
            ],
            yAxis : [
              {
                type : 'value'
              }
            ],
            series : [
              {
                name:this.item,
                type:'line',
                stack: '总量',
                smooth: true,
                areaStyle: {
                  normal: {
                    color:'#badcf6'
                  }},
                lineStyle: {
                  normal: {
                    color:'#badcf6'
                  }},
                data:[120, 132, 101, 134, 90, 230, 210]
              },
              {
                name:this.form.name,
                type:'line',
                stack: '总量',
                smooth: true,
                areaStyle: {
                  normal: {
                    color:this.color
                  }},
                lineStyle: {
                  normal: {
                    color:this.color
                  }},
                data:this.arr
              }
            ]
          };
          myChart.setOption(option);

          var myChart2 = echarts.init(document.getElementById('tu2'));
          var option2 = {
            title: {
              text: '管理层级对比'
            },
            color: ['#b5e4e6',this.color],
            tooltip : {
              trigger: 'axis',
              axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              }
            },
            legend: {
              right:20,
              data: [this.item,this.form.name]
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis : [
              {
                type : 'category',
                data : ['高层管理', '中层管理', '一般员工'],
                axisTick: {
                  alignWithLabel: true
                }
              }
            ],
            yAxis : [
              {
                type : 'value'
              }
            ],
            series : [
              {
                name:this.item,
                type:'bar',
                data:[2008, 34526, 68532]
              },
              {
                name:this.form.name,
                type:'bar',
                data:this.manage
              }
            ]
          };
          myChart2.setOption(option2);

          var tu3 = echarts.init(document.getElementById('tu3'));
          var op_tu3 = {
            title: {
              text: '学历分布对比'
            },
            legend: {
              right:20,
              data: [this.item,this.form.name]
            },
            color: ['#3398DB',this.color],
            tooltip : {
              trigger: 'axis',
              axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              }
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis : [
              {
                type : 'category',
                data : ['博士', '研究生', '本科', '大专'],
                axisTick: {
                  alignWithLabel: true
                }
              }
            ],
            yAxis : [
              {
                type : 'value'
              }
            ],
            series : [
              {
                name:this.item,
                type:'bar',
                data:[1, 3025, 18956, 56894]
              },
              {
                name:this.form.name,
                type:'bar',
                data:this.schooling
              }
            ]
          };
          tu3.setOption(op_tu3);

          var tu4 = echarts.init(document.getElementById('tu4'));
          var op_tu4 = option = {
            title: {
              text: '岗位结构对比'
            },
            tooltip : {
              trigger: 'axis',
              axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              }
            },
            legend: {
              right:20,
              data: ['管理','销售','策划','投资开放','设计']
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis:  {
              type: 'value'
            },
            yAxis: {
              type: 'category',
              data: [this.item,this.form.name]
            },
            series: [
              {
                name: '管理',
                type: 'bar',
                stack: '总量',
                label: {
                  normal: {
                    show: true,
                    position: 'insideRight'
                  }
                },
                data: [320,this.job[0]]
              },
              {
                name: '销售',
                type: 'bar',
                stack: '总量',
                label: {
                  normal: {
                    show: true,
                    position: 'insideRight'
                  }
                },
                data: [120,this.job[1]]
              },
              {
                name: '策划',
                type: 'bar',
                stack: '总量',
                label: {
                  normal: {
                    show: true,
                    position: 'insideRight'
                  }
                },
                data: [220,this.job[2]]
              },
              {
                name: '投资开放',
                type: 'bar',
                stack: '总量',
                label: {
                  normal: {
                    show: true,
                    position: 'insideRight'
                  }
                },
                data: [150,this.job[3]]
              },
              {
                name: '设计',
                type: 'bar',
                stack: '总量',
                label: {
                  normal: {
                    show: true,
                    position: 'insideRight'
                  }
                },
                data: [820,this.job[4]]
              }
            ]
          };
          tu4.setOption(op_tu4);

          var tu5 = echarts.init(document.getElementById('tu5'));
          var op_tu5 = {
            title: {
              text: '职称分布对比'
            },
            legend: {
              right:20,
              data: [this.item,this.form.name]
            },
            color: ['#3398DB',this.color],
            center:[10,50],
            tooltip : {
              trigger: 'axis',
              axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              }
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis : [
              {
                type : 'category',
                data : ['专家职称', '高级职称', '中级职称', '无职称'],
                axisTick: {
                  alignWithLabel: true
                }
              }
            ],
            yAxis : [
              {
                type : 'value'
              }
            ],
            series : [
              {
                name:this.item,
                type:'bar',
                data:[10, 52, 200, 334]
              },
              {
                name:this.form.name,
                type:'bar',
                data:this.jobTittle
              }

            ]
          };

          tu5.setOption(op_tu5);
        }
      },
      mounted(){
        if(this.$route.params.id ==6){
          this.item = this.$route.query.formName
        }else{
          for(var i=0;i<this.company.length;i++){
            if(this.company[i].id == this.$route.params.id){
              this.item = this.company[i].name
            }
          }
        }

        this.Play()
      },

    }
</script>

<style lang="scss" scoped>
  .g_bg{
    background-color: green;
    color: white;
    border: 1px solid green;
  }
  .corp{
    display: inline-block;
    height: 30px;
    border: 1px solid green;
    line-height: 30px;
    padding: 2px 20px;
    margin: 0 10px;

  }
  .corp a{
    color: white;
  }
  .down{
    position: absolute;
    top: 20px;
    right: 100px;
  }
  .g_btn{
    display: inline-block;
    width: 80px;
    height: 30px;
    border-radius: 5px;
    background-color: #2d7662;
    text-align: center;
    line-height: 30px;
    color: white;
    font-size: 12px;
    margin: 0 20px;
  }
  .text{
    font-size: 12px;
    margin: 30px 0;
    color: #006A00;
    text-align: right;
  }
  .x_tu{
    width: 48%;
    height: 300px;
    float: left;
    background-color: white;
    margin: 10px;
  }
  .d_tu{
    width: 100%;
    height: 400px;
    float: left;
    background-color: white;
    margin: 10px;
    .center_tu{
      margin: 50px auto;
    }
  }
  .active1{
    background-color: #005B00;
  }
</style>
