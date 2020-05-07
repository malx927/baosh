
<template>
  <div>
    <app-header :tag="header"></app-header>
    <front-slide></front-slide>
    <panel :header="header" :list="list" :footer="footers" :type="type" @on-img-error="onImgError"></panel>
  </div>
</template>

<script>
import { getNewsList } from "@/network/newlist";
import { Panel } from "vux";
import AppHeader from "@/components/AppHeader";
import FrontSlide from '@/components/FrontSlide'

export default {
  name: "News",
  data() {
    return {
      header: "物业动态",
      type: "3",
      list: [],
      footers: {
        title: "更多",
        url: {
          path: "",
          replace: false
        }
      }
    };
  },

  components: {
    Panel,
    AppHeader,
    FrontSlide,
  },

  computed: {},

  mounted() {
    this.getNews()
  },

  methods: {
    onImgError(item, $event) {
      console.log(item, $event);
    },
    getNews() {
      getNewsList("news", 20).then(
        response => {
          let data = response.message;
          let list = [];
          for (var i in data) {
            list[i] = {};
            list[i].title = data[i].title;
            list[i].url = {path: `/detail/${data[i].id}`};
            list[i].src = data[i].img_url;
          }
          this.list = list;
        },
        err => {
          console.log(err);
        }
      );
    }
  }
};
</script>
<style lang='less' scoped>
</style>