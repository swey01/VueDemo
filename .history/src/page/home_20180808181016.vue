<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <div>e=e</div>
  </div>
</template>

<script>
import HomeHeader from '../components/homeHeader'
import HomeSwiper from '../components/swiper.vue'
export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style lang="stylus" scoped></style>
