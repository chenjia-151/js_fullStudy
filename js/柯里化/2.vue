// 父组件
<template>
  <div id="app">
    <v-deal @transfer="getUser"></v-deal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: "",
    };
  },
  methods: {
    getUser(msg) {
      this.user = msg;
    },
  },
};
</script>



// 子组件
<template>
  <div id="item">
    <input type="text" v-model="userName" @change="setUser" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
    };
  },
  methods: {
    setUser() {
      this.$emit("transfer", this.userName);
    },
  },
};
</script>

<style>
</style>