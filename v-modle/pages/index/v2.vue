<template>
	<div>
		<div>性别</div>
		<radio-group name="radio" checked @change="raV" >		        
		    <radio  value="男" />男		        		        
		    <radio  value="女" />女
		</radio-group>
		<div>选择值：{{raValue}}</div>
		<div>答案：{{an}}</div>
		<view class="title">兴趣</view>
		<checkbox-group name="checkbox" checked @change="chV">
		        <checkbox value="运动" />运动
		        <checkbox value="阅读" />阅读
				<checkbox value="听歌" />听歌
				<checkbox value="睡觉" />睡觉
		</checkbox-group>	
		<div>选择值1：{{chValue}}</div>
		<div>答案：{{an1}}</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				raValue : '',
				raValue1 : '男',
				an : '',
				chValue : '',
				chValue1 : '["运动","阅读","听歌","睡觉"]',
				an1 : '',
			}
		},
		methods: {			
			raV: function(e) {
				console.log(JSON.stringify(e.detail.value)),
			    this.raValue = e.detail.value
				if (this.raValue === this.raValue1) {
				  this.an='正确'
				}
				else {
				  this.an='错误'
				}
			},
			chV: function(e) {
				console.log(JSON.stringify(e.detail.value)),
			    this.chValue = JSON.stringify(e.detail.value)
				if (this.chValue === this.chValue1) {
				  this.an1='正确'
				}
				else {
				  this.an1='错误'
				}
			}
		},
	}
</script>
<style>
	
</style>