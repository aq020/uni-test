<template>
<div>
  <div id="app" class="box">
	    <div class="btn-reset1">
            <span v-text="'累计移动:'+stepCount+'步'"></span>
		</div>
  	    <ul class="puzzle-wrap">
            <li :class="{'puzzle': true, 'puzzle-empty': !puzzle}" v-for="(puzzle,index) in puzzles" :key="puzzle" @click="moveFn(index)">
			    <div :class="ast[index]"></div>	
	        </li>
        </ul>
  		<div class="btn">
  		    <button class="btn-reset" @click="reset">重置游戏</button>
  		</div>
  	</div>
	<div class="box1">
        <p>玩法：点击空格旁的图片，进行移动，拼出原图</p>
	</div>
</div>		
</template>
<script>
	export default {
		data() {
			return {
				ast:['p1','p2','p3','p4','p5','p6','p7','p8','p9'],
			    puzzles: [1,2,3,4,5,6,7,8,""],
				stepCount: 0
			}
		},
		methods: {
			reset() {
			      let par = ['p1','p2','p3','p4','p5','p6','p7','p8',""];
			      par = par.sort(() => {
			        return Math.random() - 0.5;
			      });
			      this.ast = par;
				  this.stepCount = 0 
			    },
			moveFn(index) {
				let curNum = this.ast[index],
				    leftNum = this.ast[index - 1],
				    rightNum = this.ast[index + 1],
				    topNum = this.ast[index - 3],
				    bottomNum = this.ast[index + 3]
                if (leftNum === '') {
                    this.$set(this.ast,index - 1, curNum)
                    this.$set(this.ast,index, '')
                } else if (rightNum === '') {
                    this.$set(this.ast,index + 1, curNum)
                    this.$set(this.ast,index, '')
                } else if (topNum === '') {
                    this.$set(this.ast,index - 3, curNum)
                    this.$set(this.ast,index, '')
                } else if (bottomNum === '') {
                    this.$set(this.ast,index + 3, curNum)
                    this.$set(this.ast,index, '')
                }
				this.passFn();
				this.coun()
			},
			coun () {
				if (this.ast[8] === 'p9') {
					this.stepCount = this.stepCount
				}else{this.stepCount++}
			},
			passFn () {
			    if (this.ast[0] === 'p1' && this.ast[1] === 'p2' && this.ast[2] === 'p3' && this.ast[3] === 'p4' && this.ast[4] === 'p5' && this.ast[5] === 'p6' && this.ast[6] === 'p7' && this.ast[7] === 'p8' && this.ast[8] === "")
				{
					uni.showModal({
						content: '恭喜，闯关成功！',
						showCancel: false
					});
					let astt = ['p1','p2','p3','p4','p5','p6','p7','p8','p9'];
					this.ast = astt
				}
			}
		}
	}
</script> 
<style>
.box {
    width: 360px;
    height: 360px;
    border: 3px solid whitesmoke;
    box-shadow: 1px 1px 4px;
    margin:5px auto 0;
}
.box1 {
    width: 360px;
    height: 30px;
    border: 3px solid whitesmoke;
    box-shadow: 1px 1px 4px;
    margin: 0px auto 0;
	text-align: center;
	font-size: small;
}
.puzzle-wrap {
    display: flex;
    flex-wrap: wrap;
    width: 303px;
    height: 303px;
    margin-bottom: 40px;
    padding: 0;
    list-style: none;
    margin:0px auto 0;
}
.puzzle {
    width: 100px;
    height: 100px;
	box-shadow: inset 0px 0px 3px;
	border: 0.5px solid white;
} 
.puzzle-empty {
    width: 100px;
    height: 100px;
	box-shadow: inset 0px 0px 3px;
	border: 0.5px solid white;
}
.btn {
    display: flex;
    justify-content: center;
}
.btn-reset {
    width: 303px;
    height: 25px;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 0px;
	font-size: small;
	margin: 1px auto 0;
}
.btn-reset1 {
  width: 303px;
  height: 25px;
  text-align: center;
  border: 1px solid #ccc;
  box-shadow: inset 0px 0px 4px;
  font-size: small;
  margin: 1px auto 0;
}
.p1 {
	background-image: url('/static/vn.png');
	width: 100px;
	height: 100px;
	background-position: 0px 0px;
	border: 0.5px solid white;
}
.p2 {
	background-image: url('/static/vn.png');
	width: 100px;
	height: 100px;
	background-position: -100px 0px;
	border: 0.5px solid white;
}
.p3 {
    background-image: url('/static/vn.png');
	width: 100px;
	height: 100px;
	background-position: -200px 0px;
	border: 0.5px solid white;
}
.p4 {
	background-image: url('/static/vn.png');
	width: 100px;
	height: 100px;
	background-position: 0px -100px;
	border: 0.5px solid white;
}
.p5 {
	background-image: url('/static/vn.png');
	width: 100px;
	height: 100px;
	background-position: -100px -100px;
	border: 0.5px solid white;
}
.p6 {
	background-image: url('/static/vn.png');
	width: 100px;
	height: 100px;
	background-position: -200px -100px;
	border: 0.5px solid white;
}
.p7 {
	background-image: url('/static/vn.png');
	width: 100px;
	height: 100px;
	background-position: 0px -200px;
	border: 0.5px solid white;
}
.p8 {
	background-image: url('/static/vn.png');
	width: 100px;
	height: 100px;
	background-position: -100px -200px;
	border: 0.5px solid white;
}
.p9 {
	background-image: url('/static/vn.png');
	width: 100px;
	height: 100px;
	background-position: -200px -200px;
	border: 0.5px solid white;
}
</style>
 