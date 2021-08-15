<template>
  <div :style="{ height: systemInfo.windowHeight+'px' }">
    <swiper :style="{ height: systemInfo.windowHeight+'px' }" indicator-dots autoplay>
      <swiper-item class="box1">
        <div style="width: 100%;">          
            <img @click="goProduct(url)" src="/static/logo3.png" style="width: 100%" mode="widthFix" />        
        </div>
	  </swiper-item>
      <swiper-item class="box1">
        <div class="flex-item1">
          <navigator url="/pages/index/v1" open-type="switchTab">邓振球</navigator>
        </div>
      </swiper-item>
    </swiper>
  </div>
</template>
<style>
.box1 {
  display: flex;
  justify-content: center;
  align-items: center;
}

.flex-item1 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 750px;
  color: yellow;
  font-weight: bold;
  font-size: 2em;
}
</style>
<script>
export default {
  data() {
    return {
      systemInfo: {
        windowHeight: 600
      }
    };
  },
  async onLoad() {
    const t = this;
    const [, systemInfo] = await uni.getSystemInfo();
    t.systemInfo = systemInfo;
  },
  methods:{
  	goProduct:function(){
  		uni.navigateTo({
  		url:"/pages/index/v2"	
  		})
  	},
  }
};
</script>
