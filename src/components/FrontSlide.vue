<template>
    <swiper loop auto :list="front_swiper_list"></swiper>
 </template>

<style>

</style>

<script>
import { Swiper } from 'vux'

const baseList = [
  {
    url: 'javascript:',
    img: 'http://a.hiphotos.baidu.com/image/pic/item/e824b899a9014c087eb617650e7b02087af4f464.jpg',
    title: '送你一朵fua'
  },
  {
    url: 'javascript:',
    img: 'http://c.hiphotos.baidu.com/image/pic/item/9c16fdfaaf51f3de1e296fa390eef01f3b29795a.jpg',
    title: '送你一辆车'
  },
  {
    url: 'javascript:',
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg',
    title: '送你一次旅行',
    fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
  }
]

export default {
  components: {
    Swiper
  },
  data () {
    return {
      front_swiper_list: baseList,
      swiperItemIndex: 1
    }
  }
}
</script>