// 父组件
<template>
  <div id="app">
    <v-tem :logo="getMessage"></v-tem>
  </div>
</template>

<script>
export default {
  data() {
    return {
      getMessage: "Hello World",
    };
  },
};
</script>

// 子组件
<template>
    <div id="item">
        <div id="logo">{{logo}}</div>
    </div>
</template>

<script>
export default {
    props:['logo']
}
</script>