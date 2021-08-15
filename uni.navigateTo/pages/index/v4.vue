<template>
  <div>
    <swiper :indicator-dots="indicatorDots" :autoplay="autoplay">
	  <swiper-item>
	    <div class="box1">
	      <img @click="goPg1(url)" src="/static/logo3.png" style="width: 30%" mode="widthFix">
	    </div>
	  </swiper-item>
	  <swiper-item>
	    <div class="box1">
	      <img @click="goPg2(url)" src="/static/logo4.png" style="width: 50%" mode="widthFix">
	    </div>
	  </swiper-item>
	</swiper>
    <div >
      <div class="box2">
        <div >指示点</div>
        <switch style="transform:scale(0.5)" color="#2C405A" :checked="indicatorDots" @change="changeIndicatorDots" />
      </div>
      <div class="box2">
        <div >自动播放</div>
        <switch style="transform:scale(0.7)" color="#0000FF" :checked="autoplay" @change="changeAutoplay" />
      </div>
    </div>
  </div>	
</template>
<script>
  export default{
	data() {
	        return {
	            indicatorDots: true,
	            autoplay: true,	            
	        }
	    },  
    methods:{
	  goPg1:function(){
	    uni.navigateTo({
		  url:"/pages/index/v5"
		})
	  },
	  goPg2:function(){
	    uni.navigateTo({
	  		  url:"/pages/index/v6"
	  		})
	  },
	  changeIndicatorDots(e) {
	    this.indicatorDots = !this.indicatorDots
	  },
	  changeAutoplay(e) {
	    this.autoplay = !this.autoplay
	  },
	}
  }	
</script>
<style>
.box1 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.box2 {
  display: flex;
  justify-content:space-between;
}
</style>