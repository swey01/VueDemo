<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons><home-icons>
  </div>
</template>

<script>
import HomeHeader from '../components/homeHeader.vue'
import HomeSwiper from '../components/swiper.vue'
import HomeIcons from '../components/homeIcon.vue'
export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
}
</script>

<style lang="stylus" scoped></style>
