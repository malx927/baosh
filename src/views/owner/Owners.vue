
<template>
  <div>
    <app-header :tag="header"></app-header>
    <front-slide></front-slide>
    <panel :header="header" :list="list" :footer="footers" :type="type" @on-img-error="onImgError"></panel>
  </div>
</template>

<script>
import { getOwnerArticleList } from "@/network/newlist";
import img_circle from "@/assets/image/circle-outline.png";

import { Panel } from "vux";
import AppHeader from "@/components/AppHeader";
import FrontSlide from "@/components/FrontSlide";

export default {
  name: "News",
  data() {
    return {
      header: "业主投稿",
      type: "3",
      list: [],
      footers: {
        title: "更多",
        url: {
          path: "",
          replace: false
        }
      },
      img_circle: img_circle
    };
  },

  components: {
    Panel,
    AppHeader,
    FrontSlide,
  },

  computed: {},

  mounted() {
    this.getOwnerArticle()
  },

  methods: {
    onImgError(item, $event) {
      console.log(item, $event);
    },
    getOwnerArticle() {
      getOwnerArticleList("owners", 20).then(
        response => {
          let data = response.message;
          let list = [];
          for (var i in data) {
            list[i] = {};
            list[i].title = data[i].title;
            list[i].url = {path: `/detail/${data[i].id}`};
            list[i].src = img_circle;
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