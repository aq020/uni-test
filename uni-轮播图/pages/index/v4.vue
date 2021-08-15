<template>
<div :style="{ height: systemInfo.windowHeight+'px' }">
    <swiper :style="{ height: systemInfo.windowHeight+'px' }" autoplay>
      <swiper-item class="box1">
        <div style="width: 100%;">
          <navigator url="/pages/index/index" open-type="switchTab">
            <img src="/static/logo3.png" style="width: 100%" mode="widthFix" />
          </navigator>
        </div>
      </swiper-item>
      <swiper-item class="box1">
        <div style="width: 100%;">
          <navigator url="/pages/index/index" open-type="switchTab">
            <img src="/static/logo1.png" style="width: 100%" mode="widthFix" />
          </navigator>
        </div>
      </swiper-item>
      <swiper-item class="box1">
        <div style="width: 100%;">
          <navigator url="/pages/index/index" open-type="switchTab">
            <img src="/static/logo.png" style="width: 100%" mode="widthFix" />
          </navigator>
        </div>
      </swiper-item>
      <swiper-item class="box1">
        <div class="flex-item1">
          <navigator url="/pages/index/index" open-type="switchTab">邓振球</navigator>
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
  background-color: #4cd964;
  color: white;
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
  }
};
</script>
