<template>
  <div>
    <panel :header="header" :list="list" :type="type" @on-img-error="onImgError"></panel>
  </div>
</template>

<script>
import { Panel } from "vux";
import { getOwnerArticleList } from "@/network/newlist"
import img_circle from '@/assets/image/circle-outline.png'
export default {
  components: {
    Panel
  },
  props: {},
  data() {
    return {
      header: "业主投稿",
      type: "3",
      list: [],
      footers: {
        title: "更多",
        url: ""
      },
      img_circle: img_circle,
    };
  },
  watch: {},
  computed: {},
  methods: {
    onImgError(item, $event) {
      console.log(item, $event);
    }
  },
  created() {},
  mounted() {
    getOwnerArticleList("ownerarticle", 3).then(
      response => {
        let data = response.message;
        let list = [];
        for (var i in data) {
          list[i] = {};
          list[i].title = data[i].title;
          list[i].url = data[i].img_url;
          list[i].src = img_circle;

        }
        list.splice(0, 5);
        this.list = list;
      },
      err => {
        console.log(err);
      }
    );
  }
};
</script>

<style  scoped>
</style>