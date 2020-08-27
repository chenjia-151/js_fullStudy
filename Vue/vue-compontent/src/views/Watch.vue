<template>
  <div class="watch">
    <span style="margin-right: 20px">{{temp}}度</span>
    <span>{{suggest}}</span>
    <br />
    <button @click="add">add</button> |
    <button @click="reduce">reduce</button>
  </div>
</template>

/**
    watch  是指定哪个改变
    update  所有的都会改变
 */

<script>
// mixins   将外部的代码扩展到内部中来
let addLog = {
  updated: function() {
      console.log('数据发生变化了，此时温度为' + this.temp);
  },
};

let ext = {
    created(){
        console.log('我是被扩展出来的生命周期');
    },
    methods: {
        add(){
            console.log('我是被扩展出来的方法');
        }
    }
}

export default {
  data() {
    return {
      temp: 25,
      suggest: "穿短袖",
    };
  },

  mixins:[addLog],
  extends: ext,

  methods: {
    add() {
      this.temp += 5;
    },
    reduce() {
      this.temp -= 5;
    },
  },

  watch: {
    temp: function (newVal, oldVal) {
      console.log(newVal, oldVal);
      if (newVal >= 15) {
        this.suggest = "穿短袖";
      } else if (newVal < 15 && newVal >= 0) {
        this.suggest = "穿夹克";
      } else if (newVal < 0) {
        this.suggest = "穿棉袄";
      }
    },
  },

};
</script>

<style>
</style>