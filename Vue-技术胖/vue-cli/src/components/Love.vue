<template>
  <div id="app">
      <p>{{num}}</p>
    <input class="input" type="text" v-model="num" /><br>
    <button @click="add()">+</button> |
    <button @click="desc()">-</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1,
    };
  },
  methods: {
    add() {
      this.num++;
    },
    desc() {
      this.num--;
    },
  },
};
</script>

<style>
input{
    margin-bottom: 20px;
}
</style>