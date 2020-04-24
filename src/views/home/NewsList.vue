
<template>
  <div>
    <panel :header="header" :list="list" @on-click-header="onClick" :footer="footers" :type="type" @on-img-error="onImgError">
    </panel>
  </div>
</template>

<script>
import { Panel } from 'vux'
import { getNewsList } from '@/network/newlist'
export default {
  name: "newslist",
  data() {
    return {
      header: '物业动态  >>',
      type: "1",
      list: [],
      footers: {
        title: "更多",
        url: {
          path: '/news',
          replace: false
        },
      }
    }
  },

  components: {
    Panel
  },

  computed: {

  },

  mounted(){
    getNewsList("news", 5).then(response=>{
      console.log(response)
      let data = response.message
      let list = []
      for (var i in data) {
        list[i] = {}
        list[i].title = data[i].title
        list[i].url = {path: `/detail/${data[i].id}`}
        list[i].src = data[i].img_url
 
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
      this.$router.push("/news")
    }
  }
};
</script>
<style  scoped>
</style>