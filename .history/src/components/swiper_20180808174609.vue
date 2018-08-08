<template>
<div class="wrapper">
  <swiper :options="swiperOption" >
    <swiper-slide>
      <img class="swiper-img" src="https://source.qunarzz.com/site/images/wap/home/recommend/iphoneplus/dujia_shuqi_banner_20180710.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img class="swiper-img" src="https://source.qunarzz.com/site/images/wap/home/recommend/iphoneplus/sc_sqdc_20180727.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img class="swiper-img" src="https://source.qunarzz.com/site/images/wap/home/recommend/iphoneplus/20180716_wap_11043.jpg" />
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div> -->
    <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
  </swiper>
</div>
</template>

<script>
export default {
  name: 'homeSwiper',
  data () {
    return {
      swiperOption: {}
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom 32.25%

    .swiper-img
      max-width: 100%
</style>
