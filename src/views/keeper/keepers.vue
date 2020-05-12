<template>
  <div>
    <app-header :tag="header"></app-header>
    <front-slide></front-slide>
    <div id="keepers">
      <h2>{{header}}</h2>
    </div>
     <grid :cols="2" id="grid">
      <grid-item :label="'测试数据'" v-for="i in 9" :key="i">
        <img slot="icon" src="~@/assets/image/ic_nav_my_pressed.png">
      </grid-item>
     </grid>
     <bottom></bottom>
  </div>
 
</template>

<script>

import { Panel, Grid, GridItem } from "vux";
import AppHeader from "@/components/AppHeader";
import FrontSlide from "@/components/FrontSlide";
import Bottom from '@/components/Bottom'

export default {
  components: {
    AppHeader,
    FrontSlide,
    Panel,
    Grid,
    GridItem,
    Bottom
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

<style scoped>
#keepers h2 {
  text-align: center;
  font-size: 20px;
}

</style>