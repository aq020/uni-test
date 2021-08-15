<template>
	<div class="box">
		<div v-if = "value" style="width: 10%;background-color: yellow;color: red;font-size: 1em;">开</image></div>
		<div v-else style="width: 10%;background-color: #333333;color: white;font-size: 1em;">关</image></div>
		<switch :checked="value" @change="switchChange()" />
		
	</div>    	
</template>
<script>
  export default{
	data () {
	  return {
		value : true,
	  }
	},
	methods: {
	  switchChange: function () {		  		
		  this.value = !this.value;
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