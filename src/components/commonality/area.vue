<template>
	<div class="area">
		<p>地区分布</p>
		<ul class="selectarea clearFix">
			<li v-for="(item,index) in list" @click="addClass(item,index)">{{item}}</li>
		</ul>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				list:["北京市","黑龙江","山东省","重庆市","山西省","浙江省","湖南省","云南省","吉林省","江西省","海南省","天津省","河南省","四川省","内蒙古自治区","安徽省","广东省","西藏自治区","香港特别行政区"],
				num:0
			}
		},
		methods:{
			addClass(item,index){
				console.log(index);
			}
		}
	}
</script>
<style lang="scss">
	.area{
		padding: 10px 20px; 
		>p{
			line-height: 40px;
			padding-bottom: 5px; 
			border-bottom: 1px solid #999999;   
		}
		.selectarea{
			margin-top: 10px; 
			>li{
				float: left;
				margin: 10px 15px 10px 0; 
				font-size: 13px; 
				cursor: pointer; 
			}
		}
	}
	
	
</style>