<template>
  <div class="homeHeader">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeHeader',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
  .homeHeader
   display: flex
   line-height: .84rem
   color: #fff
   background: $bgColor

  .header-left
    float: left
    width: .64rem
    text-align: center

    .back-icon
      font-size: .4rem

  .header-input
    flex: 1
    height: .64rem
    line-height: .64rem
    background: #fff
    border-radius: .1rem
    margin-top: .12rem
    margin-left: .2rem
    padding-left: .2rem
    color: #ccc

  .header-right
    float: right
    width: 1.24rem
    text-align: center

    .arrow-icon
      margin-left: -.04rem
      font-size: .24rem
</style>
