
<template>
  <div>
    <panel :header="title"  @on-click-header="onClick" :list="list" :type="type" @on-img-error="onImgError">
    </panel>
  </div>
</template>

<script>
import { Panel, Cell, Group } from 'vux'
import { getNoticeList } from '@/network/newlist'
export default {

  data() {
    return {
      title: '物业通知 >>',
      type: "1",
      list: [],
      footers: {
        title: "更多",
        url: {
          path: '',
          replace: false
        },
      }
    }
  },

  components: {
    Panel,
    Cell,
    Group,
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
        list[i].url = {path: `/detail/${data[i].id}`}
 
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
    },
    onClick(){
      this.$router.push("/notices")
    }
  }
};
</script>
<style lang='less' scoped>
</style>