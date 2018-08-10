<template>
  <div class="icons">
    <swiper>
      <swiper-slide>
        <div class="icon" v-for="item of iconList" :key="item.id">
          <div class="icon-img">
            <img :src="item.iconUrl" alt="图标">
          </div>
          <p class="icon-text">{{item.name}}</p>
        </div>
      </swiper-slide >
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcon',
  data () {
    return {
      iconList: [
        {id: '0001', name: '景点门票', iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'},
        {id: '0002', name: '必玩景点', iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png'},
        {id: '0003', name: '夏日玩水', iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png'},
        {id: '0004', name: '文化古迹', iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png'},
        {id: '0005', name: '动植物园', iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png'},
        {id: '0006', name: '故宫', iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png'},
        {id: '0007', name: '一日游', iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png'},
        {id: '0008', name: '汽车票', iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/95/8d02011d149bdb02.png'},
        {id: '0009', name: '游乐场', iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png'},
        {id: '0010', name: '全部玩乐', iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png'}
      ]
    }
  },
  mounted: {
    pages () {
      // const pages = []
      this.iconList && this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        console.log(11, page)
        // if (!pages[page]) {
        //   pages[page] = []
        // }
        // pages[page].push(item)
        // return pages
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
  .icons
    overflow: hidden
    height: 0
    padding-bottom: 50%

    & >>> .swiper-container
      width: 100%

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
        box-sizing: border-box
        padding: .1rem
        text-align: center

        img
          height: 100%

      .icon-text
        position : absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        text-align: center
        color: $darkTextColor
</style>
