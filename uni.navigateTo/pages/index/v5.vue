<template>
	<div class="box">
		<image style="width: 10%" mode="widthFix" :src="src"></image>
		<switch checked @change="changesrc" />
	</div>    	
</template>
<script>
  export default{
	data() {
	        return {
			 src: "/static/logo6.png",
			 }
	},
    methods:{
	  changesrc() {
		const t = this;
		t.src= "/static/logo5.png"	
	  },
	}
  }	
</script>
<style>
.box {
  display: flex;
  justify-content:space-between;
  width: 100%;
}
</style>