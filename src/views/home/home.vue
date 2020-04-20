<template>
  <!-- <div>
        <top-search></top-search>
        <front-slide></front-slide>
        <font-marquee></font-marquee>
  </div>-->
  <div style="height:100%;">
    <view-box ref="viewBox">
      <x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;"></x-header>
      <router-view></router-view>
      <tabbar slot="bottom"></tabbar>
    </view-box>
  </div>
</template>

<script>
import TopSearch from "@/views/TopSearch";
import FrontSlide from "@/components/FrontSlide";
import FontMarquee from "@/components/FontMarquee";
import {ViewBox} from "vux"
export default {
  name: "Home",
  components: {
    TopSearch,
    FrontSlide,
    FontMarquee,
    ViewBox,
  }
};
</script>

<style>
html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
</style>