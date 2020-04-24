
<template>
  <div>
    <app-header :tag="header"></app-header>
    <panel :header="header" :list="list" :type="type" @on-img-error="onImgError"></panel>
  </div>
</template>

<script>

import { Panel } from "vux";
import AppHeader from "@/components/AppHeader";

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
    Panel,
    AppHeader,
  },

  computed: {

  },

  mounted(){
    this.getEvents()
  },

  methods: {
    onImgError(item, $event) {
      console.log(item, $event);
    },
    getEvents(){
      getEventList("events", 20).then(response=>{
        let data = response.message
        let list = []
        for (var i in data) {
          list[i] = {}
          list[i].title = data[i].title
          list[i].url = {path: `/detail/${data[i].id}`};
          list[i].src = this.img_circle
  
        }
        this.list = list
      }, err=>{
        console.log(err)
      })
    }
  }
};
</script>
<style lang='less' scoped>
</style>