<template>
  <div id="app" >

      <router-view></router-view>

    <!-- <Footer></Footer> -->
    
  </div>
</template>

<script>
import { ViewBox } from "vux";
import Footer from "./components/Footer";
export default {
  name: "app",
  components: {
    ViewBox,
    Footer
  }
};
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";

body {
  background-color: #fbf9fe;
  height:100vh;
}
</style>
