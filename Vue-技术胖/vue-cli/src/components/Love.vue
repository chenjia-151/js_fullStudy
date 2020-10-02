<template>
  <div id="app">
    <input class="input" type="text" v-model="msg" /><br>
    <button @click="add()">+</button> |
    <button @click="desc()">-</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 1,
    };
  },
  methods: {
    add() {
      this.msg++;
    },
    desc() {
      this.msg--;
    },
  },
};
</script>

<style>
input{
    margin-bottom: 20px;
}
</style>