
<template>
  <div>
    <app-header :tag="title"></app-header>
    <front-slide></front-slide>
    <panel :header="title" :list="list" :type="type" @on-img-error="onImgError"></panel>
  </div>
</template>

<script>
import { Panel } from "vux";
import AppHeader from "@/components/AppHeader";
import FrontSlide from "@/components/FrontSlide";
import { getNoticeList } from '@/network/newlist'
export default {
  name: "Notice",
  components: {
    AppHeader,
    FrontSlide,
    Panel
  },

  data() {
    return {
      type: "1",
      title: "物业通知",
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
  methods: {
    getNotices() {
      getNoticeList("notice", 20).then(
        response => {
          let data = response.message;
          let list = [];
          for (var i in data) {
            list[i] = {};
            list[i].title = data[i].title;
            list[i].url = { path: `/detail/${data[i].id}` };
          }
          this.list = list;
        },
        err => {
          console.log(err);
        }
      );
    },
    onImgError(item, $event) {
      console.log(item, $event);
    },
  },
  mounted() {
    this.getNotices()
  }
};
</script>
<style scoped>
</style>