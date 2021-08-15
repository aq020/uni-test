<template>
	<div class="box">
		<image style="width: 10%" mode="widthFix" :src="src"></image>
		<switch :checked="value" @change="Change" />
	</div>    	
</template>
<script>
  export default{
	data () {
	  return {
		value : true,
		src : "/static/logo6.png"
	  }
	},
	methods: {
	  Change: function () {
		  const t = this;		  
		  t.value = !t.value;
		  const value = t.value;
		  if (value === true) {
		    t.src="/static/logo6.png"
		  }	
		  else if (value === false){
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