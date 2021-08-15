<template>
	<div>
		<form @submit="formSubmit()" @reset="formReset">
		<div class="uni-form-item uni-column">
			<div class="title">姓名:</div>
			<input class="uni-input" name="input" v-model="na" placeholder="输入框"/>
		</div>
		<div class="uni-form-item uni-column">
			<div class="title">密码:</div>
			<input class="uni-input" password name="input" v-model="pw" placeholder="输入框"/>
		</div>
		<div class="uni-btn-v">
		    <button form-type="submit">登录</button>
			<button type="default" form-type="reset">清空</button>
		</div>
		</form>
	</div>
</template>

<script>
	export default {
	    data() {
	        return {
				na : '',
				na1 : 'a',
				pw : '',
				pw1 : 'qq',
	        }
	    },
	    methods: {				
			formSubmit : function() {
			    if (this.na === this.na1 && this.pw === this.pw1) {
				  uni.navigateTo({url : "/pages/index/v2"})
			    }
			    else {
			      uni.showModal({
			          content: '输入错误',
			          showCancel: false
			      })
			    }
			},
			formReset: function() {
			    console.log('清空数据')
			}
	    }
	}
</script>

<style>
	.uni-form-item .title {
	    padding: 20rpx 0;
	}
</style>