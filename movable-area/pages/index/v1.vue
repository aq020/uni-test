<template>
  <div id="app" class="box">
    <div class="btn">
      <button class="btn btn-warning btn-block btn-reset" @click="render">点此加载游戏</button>
    </div>
    <ul class="puzzle-wrap">
      <li
        :class="{'puzzle': true, 'puzzle-empty': !puzzle}"
        v-for="(puzzle,index) in puzzles"
        :key="index"
        @click="moveFn(index)"
      >{{puzzle}}</li>
    </ul>
    <h1 v-show="ok">玩法：移动数字方块按顺序排列</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      puzzles: [],
      ok: false
    };
  },
  methods: {
    render() {
      let puzzleArr = [],
        i = 1;
      for (i; i < 9; i++) {
        puzzleArr.push(i);
      }
      puzzleArr = puzzleArr.sort(() => {
        return Math.random() - 0.5;
      });
      this.puzzles = puzzleArr;
      this.puzzles.push("");
      this.ok = true;
    },
    moveFn(index) {
      let curNum = this.puzzles[index],
        leftNum = this.puzzles[index - 1],
        rightNum = this.puzzles[index + 1],
        topNum = this.puzzles[index - 3],
        bottomNum = this.puzzles[index + 3];
      if (leftNum === "") {
        this.$set(this.puzzles, index - 1, curNum);
        this.$set(this.puzzles, index, "");
      } else if (rightNum === "") {
        this.$set(this.puzzles, index + 1, curNum);
        this.$set(this.puzzles, index, "");
      } else if (topNum === "") {
        this.$set(this.puzzles, index - 3, curNum);
        this.$set(this.puzzles, index, "");
      } else if (bottomNum === "") {
        this.$set(this.puzzles, index + 3, curNum);
        this.$set(this.puzzles, index, "");
      }
      this.passFn();
    },
    passFn() {
      if (this.puzzles[8] === "") {
        const newPuzzles = this.puzzles.slice(0, 8);
        const isPass = newPuzzles.every((e, i) => e === i + 1);
        if (isPass) {
          uni.showModal({
            content: "恭喜，闯关成功！",
            showCancel: false
          });
        }
      }
    },
    ready() {
      this.render();
    }
  }
};
</script> 
<style>
.box {
  width: 300px;
  height: 450px;
  background: #f90;
  margin: 5px auto 0;
}
.puzzle-wrap {
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  height: 300px;
  margin-bottom: 40px;
  padding: 0;
  background: ;
  list-style: none;
}
.puzzle {
  width: 98px;
  height: 98px;
  font-size: 20px;
  background: #f90;
  text-align: center;
  line-height: 100px;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 4px;
  text-shadow: 1px 1px 1px #b9b4b4;
  cursor: pointer;
}
.puzzle-empty {
  background: ;
  box-shadow: inset 2px 2px 18px;
}
.btn-reset {
  box-shadow: inset 2px 2px 18px;
}
</style>
 