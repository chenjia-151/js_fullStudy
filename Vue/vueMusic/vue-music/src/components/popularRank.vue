<template>
  <div class="list">
    <ul>
      <li class="item">
        <div class="image">
          <img
            src="http://p3.music.126.net/CaMsZBS-iZxGeaYrRKu_cQ==/109951165379367095.jpg"
            style="width: 60px; height: 60px"
            alt=""
          />
        </div>
        <div class="text">
          <h2 class="name">听说爱笑的人 心里都藏了很多故事</h2>
          <p class="desc">
            有没有一首歌 让你很想念一段时光 有没有一首歌
            有没有一首歌 让你很想念一段时光 有没有一首歌
            有没有一首歌 让你很想念一段时光 有没有一首歌
          </p>
        </div>
      </li>
      <li class="item">
        <div class="image">
          <img
            src="http://p3.music.126.net/CaMsZBS-iZxGeaYrRKu_cQ==/109951165379367095.jpg"
            style="width: 60px; height: 60px"
            alt=""
          />
        </div>
        <div class="text">
          <h2 class="name">听说爱笑的人 心里都藏了很多故事</h2>
          <p class="desc">
            有没有一首歌 让你很想念一段时光 有没有一首歌
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang='stylus' scoped>
@import "../assets/css/function.styl"
.list
    // width 100%
    height px2rem(160px)
    background-color #201d4d
    .item
        display flex
        margin 0 px2rem(40px) px2rem(40px) px2rem(40px)
        align-items center
        .image
            flex 0 0 px2rem(50px)
            padding-right px2rem(40px)
        .text
            align-items center
            .name
                color #fff
                margin-bottom px2rem(10px)
                
            .desc
                height px2rem(60px)
                color hsla(0,0%,100%,.3)
                font-size px2rem(28px)
                text-overflow ellipsis
</style>

