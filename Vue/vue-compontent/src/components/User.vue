<template>
  <div class="user">
    <p>{{userName}}</p>
    <!-- <button @click="handle">按钮</button> -->
    <button @click="changeBaby">养新的宠物</button>
  </div>
</template>

<script>
export default {
  props: ['userName'],  // 接收父组件传过来的参数
  data() {
    return {
      name: "张三",
      title: "子组件里的title",
      baby: "小黑"
    };
  },
  methods:{
      handle(){
        //   console.log('ok');
        this.$emit('titleChange', this.title)   //  emit发散器  第一个参数是往外发散的方法名，第二个参数是一个值
      },
      changeBaby(){
        this.$emit('animalChange',this.baby)
      }
  }
};
</script>

<style>
</style>