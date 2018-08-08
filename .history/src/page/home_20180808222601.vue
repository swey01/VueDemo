<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <div>e=e</div>
  </div>
</template>

<script>
import HomeHeader from '../components/homeHeader.vue';
import HomeSwiper from '../components/swiper.vue';
import HomeIcon from '../components/h.omeIconvue';
export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon
  }
}
</script>

<style lang="stylus" scoped></style>
