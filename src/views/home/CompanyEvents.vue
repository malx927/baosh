
<template>
  <div>
    <panel :header="header" :list="list" @on-click-header="onClick" :type="type" @on-img-error="onImgError"></panel>
  </div>
</template>

<script>
import { Panel,base64 } from 'vux'
import { getEventList } from '@/network/newlist'
import img_circle from '@/assets/image/circle-outline.png'
export default {

  data() {
    return {
      header: '宝石花大事记',
      type: "3",
      list: [],
      footers: {
        title: "更多",
        url: '',
      },
      img_circle: img_circle,
    }
  },

  components: {
    Panel
  },

  computed: {

  },

  mounted(){
    getEventList("events", 3).then(response=>{
      let data = response.message
      let list = []
      for (var i in data) {
        list[i] = {}
        list[i].title = data[i].title
        list[i].url = {path: `/detail/${data[i].id}`};
        list[i].src = this.img_circle
 
      }
      list.splice(0,5)
      this.list = list
    }, err=>{
      console.log(err)
    })
  },

  methods: {
    onImgError(item, $event) {
      console.log(item, $event);
    },
    onClick(){
      this.$router.push("/events")
    }
  }
};
</script>
<style lang='less' scoped>
</style>