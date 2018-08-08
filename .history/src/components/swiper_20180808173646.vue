<template>
<swiper :options="swiperOption" >
  <swiper-slide>
    <img src="" />
  </swiper-slide>
  <swiper-slide>
    <img src="" />
  </swiper-slide>
  <div class="swiper-pagination"  slot="pagination"></div>
  <!-- <div class="swiper-button-prev" slot="button-prev"></div>
  <div class="swiper-button-next" slot="button-next"></div> -->
  <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
</swiper>
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

<style lang="stylus" scoped></style>
