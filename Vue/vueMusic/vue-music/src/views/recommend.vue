<template>
  <div>
    <!-- 轮播图 -->
    <v-swipe></v-swipe>

    <h1 class="hotRank">人气歌单推荐</h1>

    <!-- 人气歌单 -->
    <v-popular-rank></v-popular-rank>
  </div>
</template>

<script>
import swipe from "@/components/swipe"
import popularRank from "@/components/popularRank"
export default {
  data() {
    return {}
  },
  methods:{},
  components:{
    'v-swipe': swipe,
    'v-popular-rank': popularRank
  }
};
</script>

<style lang='stylus' scoped>
@import "../assets/css/function.styl"
.hotRank
    color #ca2349
    width 100%
    height px2rem(100px)
    line-height px2rem(100px)
    text-align center
    align-items center
    background-color #201d4d
</style>