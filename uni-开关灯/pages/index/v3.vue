<template>
	<div id="app">
		<p>点击开关灯泡</p>
		<img :src="src" width="196px" height="182px">
		<div>
			<button @click="change">开关</button>
		</div>
	</div>
</template>

<script>
	var app = new Vue({
		el: 'app',
		data: {
			src: "/static/logo6.png",
			value: true
		},
		methods: {
			change() {
				const t = this;
				t.value = !t.value;
				const v = t.value;
				if (v === true) {
					t.src = "/static/logo6.png"
				} else if (v === false) {
					t.src = "/static/logo5.png"
				}
			}
		}
	})
</script>

<style>
</style>
