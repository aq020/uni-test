<template>
    <view>
        <view>
            <form @submit="formSubmit" @reset="formReset">
				<view class="uni-form-item uni-column">
				    <view class="title">姓名</view>
				    <input class="uni-input" name="input" v-model="msg" placeholder="输入框" />
				</view>
				<view class="uni-form-item uni-column">
				    <view class="title">性别</view>
				    <radio-group name="radio" checked @change="onKeyInput">
				        <radio value="男" />男
				        <radio value="女" />女
				    </radio-group>
				</view>
				<view class="uni-form-item uni-column">
				    <view class="title">年龄</view>
				    <slider value="20" name="slider" show-value></slider>
				</view> 
				<view class="uni-form-item uni-column">
				    <view class="title">住址</view>
				    <textarea class="uni-textarea" name="textarea" v-model="msg1" auto-height placeholder="输入框"/>
				</view>
				<view class="uni-form-item uni-column">
				    <view class="title">爱好</view>
				    <checkbox-group name="checkbox" checked @change="chV1">
				        <label>
				            <checkbox value="运动" />运动
				        </label>
				        <label>
				            <checkbox value="阅读" />阅读
				        </label>
				    </checkbox-group>
				</view>
                <view class="uni-form-item uni-column">
                    <view class="title">保留模式</view>
                    <view>
                        <switch name="switch" />
                    </view>
				</view>	             
                <view class="uni-btn-v">
                    <button form-type="submit">提交</button>
                    <button type="default" form-type="reset">清空</button>
                </view>
            </form>
        </view>
    </view>
</template>
<script>
    export default {
        data() {
            return {
				msg : '',
				msg1 : '',
				msg2 : '',
				chValue1 : ''
            }
        },
        methods: {
            formSubmit: function(e) {
                console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
                var formdata = e.detail.value
                uni.showModal({
                    content: '表单数据内容：' + JSON.stringify(formdata),
                    showCancel: false
                });
            },
            formReset: function(e) {
                console.log('清空数据')
            },
			onKeyInput: function(e) {
				console.log(JSON.stringify(e.detail.value)),
			    this.msg2 = e.detail.value
			},
			chV1: function(e) {
				console.log(JSON.stringify(e.detail.value)),
			    this.chValue1 = JSON.stringify(e.detail.value)
			}
        }
    }
</script>

<style>
    .uni-form-item .title {
        padding: 20rpx 0;
    }
</style>