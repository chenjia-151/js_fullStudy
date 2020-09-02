<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img
          width="64"
          height="64"
          :src="seller.avatar"
          alt
        />
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
        <div class="support" v-if="seller.supports">
          <support-ico :size=2 :type="seller.supports[0].type"></support-ico>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SupportIco from '@/components/support-ico/support-ico'

export default {
  props: {
    seller: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  created(){
    setTimeout(() => {
      console.log(this.seller); 
    }, 1000);
  },

  components:{
    SupportIco,
  }

};
</script>

<style lang="stylus">
@import '../../common/stylus/variable.styl';
@import '../../common/stylus/mixin.styl';

.header {
  position: relative;
  overflow: hidden;
  color: $color-white;
  background: $color-background-ss;
}

.content-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  padding: 24px 12px 18px 24px;
}

.avatar {
  flex: 0 0 64px;
  width: 64px;
  margin-right: 16px;
}

.img {
  border-radius: 2px;
}

.content {
  flex: 1;
}

.title {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.brand {
  width: 30px;
  height: 18px;
  bg-image('brand');
  background-size: 30px 18px;
  background-repeat: no-repeat;
}

.name {
  margin-left: 6px;
  font-size: $fontsize-large;
  font-weight: bold;
}

.description {
  margin-bottom: 8px;
  line-height: 12px;
  font-size: $fontsize-small;
}

.support {
  display: flex;
  align-items: center;
}

.support-ico {
  margin-right: 4px;
}

.text {
  line-height: 12px;
  font-size: $fontsize-small-s;
}
</style>
