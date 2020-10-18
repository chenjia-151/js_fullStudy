<template>
  <div id="app">
    <v-header>
      <i class="iconfont" slot="left-icon">&#xe700;</i>
      <span slot="content">网抑云音乐</span>
      <i class="iconfont" slot="right-icon">&#xe643;</i>
    </v-header>

    <v-tab></v-tab>

    <!-- <keep-alive> vue中的组件 用来做缓存页面 -->
    <keep-alive>
      <router-view/>
    </keep-alive>

    <v-play></v-play>

    <!-- menu -->
    <v-sidebar></v-sidebar>
  </div>
</template>

<script>

import header from '@/components/header'
import sidebar from '@/components/sidebar'
import play from '@/components/play'
import tab from '@/components/tab'

export default {
  name: 'App',
  components:{
    'v-header': header,
    'v-sidebar': sidebar,
    'v-tab': tab,
    'v-play': play
  }
}
</script>

<style lang="stylus">
@font-face {
  font-family: 'iconfont';  /* project id 2052943 */
  src: url('//at.alicdn.com/t/font_2052943_w0hjys545pc.eot');
  src: url('//at.alicdn.com/t/font_2052943_w0hjys545pc.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_2052943_w0hjys545pc.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_2052943_w0hjys545pc.woff') format('woff'),
  url('//at.alicdn.com/t/font_2052943_w0hjys545pc.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_2052943_w0hjys545pc.svg#iconfont') format('svg');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}

html,
body {
  line-height: 1;
  font-family: PingFang SC, STHeitiSC-Light, Helvetica-Light, arial, sans-serif;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  background: rgba(8, 5, 58, 1);
  color: #fff;
}
</style>
