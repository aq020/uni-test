<template>
  <div>请从登录界面登录游戏!</div>
</template>

<script>
var app = new Vue({
  el: "#app",
  data: {
    puzzles: [],
    msg: false,
    ok: false
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
      this.msg = true;
      this.ok = false;
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
          this.msg = false;
          this.ok = true;
        }
      }
    },
    ready() {
      this.render();
    }
  }
});
</script>

<style>
</style>
