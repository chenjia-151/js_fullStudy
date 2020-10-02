<template>
  <div id="app">
      <p>{{num}}</p>
      <button @click="add">+</button> | 
      <button @click="reduce">-</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            num: 0
        }
    },
    methods:{
        add(){
            this.num++
        },
        reduce(){
            this.num--
        }
    }
}
</script>

<style>

</style>