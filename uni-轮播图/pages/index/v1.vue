<template>
<body>
  <p>CSS3 弹性布局弹性流（flex-flow）属性示例</p>
  <div class="flex-demo">
    <ul class="flex-container first">
      <li class="flex-item">1</li>
      <li class="flex-item">2</li>
      <li class="flex-item">3</li>
      <li class="flex-item">4</li>
    </ul>
  </div>
  <div class="flex-demo">
    <ul class="flex-container second">
      <li class="flex-item">1</li>
      <li class="flex-item">2</li>
      <li class="flex-item">3</li>
      <li class="flex-item">4</li>
    </ul>
  </div>
  <div class="flex-demo">
    <ul class="flex-container third">
      <li class="flex-item">1</li>
      <li class="flex-item">2</li>
      <li class="flex-item">3</li>
      <li class="flex-item">4</li>
    </ul>
  </div>
  <navigator url="/pages/index/index" open-type="switchTab">
    <view>跳转1页面</view>
  </navigator>
  <navigator url="/pages/index/v4" open-type="navigate">
    <view>跳转2页面</view>
  </navigator>
</body>
</template>
<style>
body {
  font-family: Arial;
  padding: 5px;
  background-color: #f1f1f1;
}
p {
  display: flex;
  justify-content: center;
  background-color: yellow;
}
.flex-container {
  display: flex;
}
.flex-container.first {
  flex-flow: row;
}
/* Initial value. Main-axis is
   inline, no wrap. */

.flex-container.second {
  flex-flow: column wrap;
  -webkit-flex-flow: column wrap;
}
/* Main-axis is block-direction (top to bottom)
   and lines wrap in the inline direction (rightwards). */

.flex-container.third {
  flex-flow: row-reverse wrap-reverse;
}
/* Main-axis is the opposite of inline direction
   (right to left). New lines wrap upwards. */
/* other styles just for format */

ul {
  padding: 0;
}
li {
  list-style: none;
}
.flex-container {
  background: deepskyblue;
  width: 200px;
  height: 200px;
  margin: 5px auto;
}
.flex-container.first {
  height: 100px;
}
.flex-item {
  background: tomato;
  padding: 5px;
  width: 80px;
  height: 80px;
  margin: 5px;
  line-height: 80px;
  color: white;
  font-weight: bold;
  font-size: 2em;
  text-align: center;
}
h1 {
  font-size: 22px;
  text-align: center;
}
.flex-demo {
  display: flex;
  justify-content: center;
}
</style>
<script>
</script>