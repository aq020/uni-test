<template>
	<div>
		<div>函数返回值(input;单行)：{{inputValue}}</div>
		<input @input="onKeyInput" placeholder="输入同步到div中" />
		<div>双向绑定值(input;单行)：{{inputValue1}}</div>
		<input v-model="inputValue1" placeholder="输入框"/>		
		<div>双向绑定值(textarea;多行)：{{textareaValue}}</div>
		<textarea v-model="textareaValue" auto-height placeholder="输入框"/>		
	</div>
</template>
<script>
	export default {
		data() {
			return {
				inputValue:'',
				inputValue1:'',
				textareaValue:''
			}
		},
		methods: {
			onKeyInput: function(event) {
			    this.inputValue = event.target.value
			}
		},
	}
</script>
<style>
	
</style>