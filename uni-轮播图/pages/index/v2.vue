
<template>
<body>
  <div class="box1">
    <h1>X-X-X-公司</h1>
  </div>
  <div class="box">
    <div>
      <navigator url="/pages/index/v5" open-type="navigate">个人门户</navigator>
    </div>
    <div>
      <navigator url="/pages/index/v6" open-type="navigate">单位门户</navigator>
    </div>
  </div>
  <div class="box2">
    <ul class="item2">
      <ul class="card">
        <li>
          <h2>管理事项</h2>
        </li>
        <li>
          <div class="fakeimg" style="height:100px;">我的待办</div>
        </li>
        <li>
          <p>普通文件</p>
        </li>
        <li>
          <p>
            X-X总、X-X总、各位同事：
            大家好！ 2019年12月9日下午14:30-16:00期间，由X-X总主持召开了管理中心12月份部门会议。本次会议纪要，详细请见附件。
            请领导和同事认真查阅，谢谢！
          </p>
        </li>
      </ul>
      <ul class="card">
        <li>
          <div class="fakeimg" style="height:100px;">已发事项</div>
        </li>
        <li>
          <p>普通文件</p>
        </li>
        <li>
          <p>
            各机构X-X员：
            你们好！
            根据目前各机构的需求，需对X-X进行监控及管理；现已为各机构X-X员配置了一个X-X监控系统的X-X管理员帐号。
            一、帐号权限：
            1、远程强制关机；
            2、标准版X-X模块授权确认；
            3、添加“X-X超标告警”短信发送号码（例如：X-X领导及X-X管理人员手机号码）；
          </p>
        </li>
      </ul>
    </ul>
  </div>
  <div class="box4">
    <ul class="item3">
      <ul class="card">
        <li>
          <h2>集团公告</h2>
        </li>
        <li>
          <div class="fakeimg" style="height:100px;">公告信息</div>
        </li>
        <li>
          <p>关于集团的一些信息..</p>
        </li>
      </ul>
      <ul class="card">
        <li>
          <h3>单位公告</h3>
        </li>
        <li>
          <div class="fakeimg">
            <p>公告信息</p>
          </div>
        </li>
        <li>
          <div class="fakeimg">
            <p>公告信息</p>
          </div>
        </li>
      </ul>
      <ul class="card">
        <li>
          <h3>提醒事项</h3>
        </li>
        <li>
          <p>一些文本...</p>
        </li>
      </ul>
    </ul>
  </div>
  <div class="box3">
    <h2>公司简介信息</h2>
  </div>
</body>
</template>

<script>
</script>

<style>
body {
  font-family: Arial;
  padding: 5px;
  background-color: #f1f1f1;
}
.box {
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 45px;
  background-color: #333333;
  color: white;
}
.box1 {
  display: flex;
  justify-content: center;
  background: white;
}
.box2 {
  display: flex;
  justify-content: space-between;
}
.box3 {
  display: flex;
  justify-content: center;
  background: #ddd;
}
.box3 {
  display: flex;
  justify-content: center;
  background: #ddd;
}

.item2 {
  width: 99%;
}
.item3 {
  width: 99%;
}
/* 图像部分 */
.fakeimg {
  background-color: #aaa;
  padding: 10px;
}

/* 文章卡片效果 */
.card {
  background-color: white;
  padding: 5px;
  margin-top: 10px;
}
ul {
  padding: 0;
}
li {
  list-style: none;
}
</style>
<script>
</script>