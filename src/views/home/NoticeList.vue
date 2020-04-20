
<template>
  <div>
    <panel :header="header" :list="list" :type="type" @on-img-error="onImgError"></panel>
  </div>
</template>

<script>
import { Panel } from 'vux'
import { getNoticeList } from '@/network/newlist'
export default {

  data() {
    return {
      header: '物业通知',
      type: "1",
      list: [],
      footers: {
        title: "更多",
        url: 'http://vux.li',
      }
    }
  },

  components: {
    Panel
  },

  computed: {

  },

  mounted(){
    getNoticeList("notice", 3).then(response=>{
      console.log(response)
      let data = response.message
      let list = []
      for (var i in data) {
        list[i] = {}
        list[i].title = data[i].title
        list[i].url = data[i].img_url
 
      }
      list.splice(0,7)
      this.list = list
    }, err=>{
      console.log(err)
    })
  },

  methods: {
    onImgError(item, $event) {
      console.log(item, $event);
    }
  }
};
</script>
<style lang='less' scoped>
</style>