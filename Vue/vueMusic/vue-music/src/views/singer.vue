<template>
  <div class="tab">
    <div class="tab-item1">
      <router-link tag="div" class="tab-item11" to="/singer/Chinese">
        <span class="tab-link">华语</span>
        <router-view></router-view>
      </router-link>

      <router-link tag="div" class="tab-item12" to="/singer/Europe">
        <span class="tab-link">欧美</span>
      </router-link>
    </div>

    <div class="tab-item2">
      <router-link tag="div" class="tab-item21" to="singer/Korea">
        <span class="tab-link">韩国</span>
      </router-link>

      <router-link tag="div" class="tab-item22" to="/singer/Japan">
        <span class="tab-link">日本</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {},
};
</script>

<style lang="stylus" scoped>
@import '../assets/css/function.styl';
.tab
    background-color #201d4d
    width 100%
    height px2rem(600px)
    .tab-item1
        display flex
        height px2rem(300px)
        text-align center
        justify-content center
        align-items center
        .tab-item11
            flex 1
            height px2rem(300px)
            line-height px2rem(300px)
            background-color #9f0f43
        .tab-item12
            flex 1
            height px2rem(300px)
            line-height px2rem(300px)
            background-color #71e3fc
            color white
    .tab-item2
        display flex
        height px2rem(300px)
        text-align center
        justify-content center
        align-items center
        .tab-item21
            flex 1
            height px2rem(300px)
            line-height px2rem(300px)
            background-color #bc824c
        .tab-item22
            flex 1
            height px2rem(300px)
            line-height px2rem(300px)
            background-color #070203
</style>
