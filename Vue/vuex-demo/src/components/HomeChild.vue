<template>
  <div class="home">
    <p>首页的子组件</p>
    <hr />
    <h3>{{count}}{{abc}}</h3>
    <p>{{$store.state.a.count}}</p>
    <div class="btn">
      <button @click="addAction">+</button> |
      <button @click="reduce">-</button>
    </div>
  </div>
</template>

<script>
import store from "@/vuex/store.js";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      msg: "Hello Wolrd",
    };
  },
  store,
  // computed:{
  //     count(){
  //         return this.$store.state.count
  //     }
  // },

  // computed:mapState({
  //     count: state => state.count
  // }),

  computed: {
    ...mapState(["count"]),
    ...mapGetters(["abc"]),
  },

  // methods:{
  //     add(){
  //         // this.$store.state.count++
  //         this.$store.commit('add', 10)  //  写在 mutation 中的 add()方法 能够直接提交
  //     },
  //     reduce(){
  //         // this.$store.state.count--
  //         this.$store.commit('reduce')
  //     }
  // }

  // methods: mapMutations(["add", "reduce"]),

  methods: {
    ...mapMutations(["add", "reduce"]), // es6中的解构 相当于将 store.js 中的 add() reduce() 方法复制过来
    ...mapActions(["addAction"]),
  },
};
</script>

<style>
</style>