<template>
  <div>
    <panel :header="header" :list="list" :type="type" @on-img-error="onImgError"></panel>
  </div>
</template>

<script>
import { Panel } from "vux";
import { getLifeColumnList } from "@/network/newlist";

export default {
  data() {
    return {
      header: "生活专栏",
      type: "5",
      list: [],
      footers: {
        title: "更多",
        url: ""
      }
    };
  },

  components: {
    Panel
  },

  computed: {},

  mounted() {
    getLifeColumnList("life", 3).then(
      response => {
        let data = response.message;
        let list = [];
        for (var i in data) {
          list[i] = {};
          list[i].title = data[i].title;
          list[i].url = data[i].img_url;
          list[i].src = data[i].img_url;
          list[i].desc = data[i].zhaiyao;
          let meta = {
            source: "点击次数：" + data[i].click,
            date: "时间:" + data[i].add_time.slice(0,10),
            other: "其他信息"
          };
          list[i].meta = meta;
        }
        list.splice(0, 7);
        this.list = list;
      },
      err => {
        console.log(err);
      }
    );
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