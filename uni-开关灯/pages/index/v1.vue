<template>
	<div class="box">
		<image style="width: 10%" mode="widthFix" :src="src"></image>
		<input v-model="src" placeholder="输入框"/>
		<switch @change="switchChange"/>
	</div>    	
</template>
<script>
  export default{
	data () {
	  return {
		src : " "
	  }
	},
	methods: {
	  switchChange: function (e) {
		  const t = this;
		  let a = e.target.value;
		  if (a === true) {
		    t.src="/static/logo6.png"
		  }	
		  else if (a === false){
		    t.src="/static/logo5.png"
		  }
	    }
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
