<template>
  <div class="title">
    <ul v-for="(item, index) in singerList" :key="index">
      <li class="item">
        <div class="left"></div>
        <div class="center">
          <img
            class="image"
            :src="item.picUrl"
            style="width: 90px; height: 90px"
            alt=""
          />
        </div>
        <div class="right">
          <div class="name">{{item.name}}</div>
          <div class="hot">
            <i class="iconfont">&#xe6e1;</i>
            <div class="score">{{item.score}}</div>
          </div>
          <div class="songs">
            <span>单曲：{{item.musicSize}} 首</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template> 

<script>
import api from "@/api";
export default {
  data(){
    return{
      singerList: []
    }
  },
  methods:{
    fetchResult(){
      api.singerLists4().then((res)=>{
        console.log(res);
        this.singerList = res.list.artists
      })
    }
  },
  created(){
    this.fetchResult()
  }
};
</script>

<style lang="stylus" scoped>
@import '../assets/css/function.styl';
.title
  background-color #201d4d
  // width 100%
  // height 100px
  box-sizing border-box
  .item
    width 100%
    height px2rem(220px)
    margin px2rem(20px) px2rem(20px) px2rem(20px) 0
    display flex
    .left
      color red
      width px2rem(90px)
      font-size px2rem(50px)
      align-items center
      line-height px2rem(220px)
      text-align center
    .center
      width px2rem(180px)
      margin-right px2rem(40px)
      .image
        margin-top px2rem(20px)
        border-radius px2rem(20px)
    .right
      display flex
      flex-direction column
      margin-top px2rem(20px)
      margin-bottom px2rem(20px)
      letter-spacing px2rem(3px)
      .name
        margin-bottom px2rem(40px)
        color #000
      .hot
        display flex
        margin-bottom px2rem(40px)
        color #8b758b
        .iconfont
          margin-right px2rem(20px)
      .songs
        color #1cae1b
</style>