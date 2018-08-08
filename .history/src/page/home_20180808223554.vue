<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icon><home-icon>
  </div>
</template>

<script>
import HomeHeader from '../components/homeHeader.vue'
import HomeSwiper from '../components/swiper.vue'
import HomeIcon from '../components/homeIcon.vue'
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
