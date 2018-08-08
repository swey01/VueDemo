<template>
  <div class="icons">
    <div class="icon">
      <div class="icon-img">
        <img src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="图标">
      </div>
      <p>景点门票</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeIcon'
}
</script>

<style lang="stylus" scoped>
  .icons
    overflow: hidden
    height: 0
    padding-bottom: 50%

    .icon
      position: relative
      overflow: hidden
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%

      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        text-align: center

        img
          height: 100%
</style>
