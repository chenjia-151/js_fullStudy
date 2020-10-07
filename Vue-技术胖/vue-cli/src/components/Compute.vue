<template>
  <div id="app">
      <p>{{msg}}</p>
      <button @click="add">+</button> | 
      <button @click="reduce">-</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            msg: 0
        }
    },
    methods:{
        add(){
            this.msg++
        },
        reduce(){
            this.msg--
        }
    }
}
</script>

<style>

</style>