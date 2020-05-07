<template>
  <div>
    <app-header :tag="header"></app-header>
    <front-slide></front-slide>
    <div id="keepers">
      <h2>{{header}}</h2>
    </div>
     
  </div>
    <!-- <panel :header="header" :list="list" :footer="footers" :type="type" @on-img-error="onImgError"></panel> -->
</template>

<script>

import { Panel } from "vux";
import AppHeader from "@/components/AppHeader";
import FrontSlide from "@/components/FrontSlide";

export default {
  components: {
    AppHeader,
    FrontSlide,
    Panel,
  },
  props: {},
  data() {
    return {
      header: "管家列表",
      type: "3",
      list: [],

    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style  scoped>
#keepers h2 {
  text-align: center;
  font-size: 20px;
}
</style>