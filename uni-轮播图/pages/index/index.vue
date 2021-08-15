<template>
  <div>
    <swiper autoplay>
      <swiper-item class="box1">
        <div style="width: 30%;">
          <navigator url="/pages/index/v2" open-type="navigate">
            <img src="/static/logo3.png" style="width: 100%" mode="widthFix" />
          </navigator>
        </div>
      </swiper-item>
      <swiper-item class="box1">
        <div style="width: 30%;">
          <navigator url="/pages/index/v3" open-type="navigate">
            <img src="/static/logo.png" style="width: 100%" mode="widthFix" />
          </navigator>
        </div>
      </swiper-item>
      <swiper-item class="box1">
        <div style="width: 30%;">
          <navigator url="/pages/index/v5" open-type="navigate">
            <img src="/static/logo1.png" style="width: 100%" mode="widthFix" />
          </navigator>
        </div>
      </swiper-item>
      <swiper-item class="box1">
        <div class="flex-item1">
          <navigator url="/pages/index/v6" open-type="navigate">邓振球</navigator>
        </div>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
</script>
<style>
.box1 {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4cd964;
}

.flex-item1 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 750px;
  background-color: #4cd964;
  color: white;
  font-weight: bold;
  font-size: 2em;
}
</style>
