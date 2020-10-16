<template>
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img style="width:100%;height:160px" v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        'http://p1.music.126.net/JDg5y9U5SptmpLFc_sGf5Q==/109951165392426475.jpg',
        'http://p1.music.126.net/5aTgiA17uEtfcDg619wcGw==/109951165392430210.jpg',
        'http://p1.music.126.net/oDc0hU2p_ST9UhOkTOQhtg==/109951165392353457.jpg',
        'http://p1.music.126.net/qqQGanP04_xJZXwZyYaXiQ==/109951165392502226.jpg'
      ],
    };
  },
};
</script>

<style lang='stylus' scoped>

</style>