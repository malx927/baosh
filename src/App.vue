<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" transition-mode="out-in"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" transition-mode="out-in"></router-view>
    <Footer></Footer>
  </div>
</template>

<script>

import Footer from "./components/Footer";
export default {
  name: "app",
  components: {
    Footer
  }
};
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";

body {
  background-color: #fbf9fe;
  height: 100vh;
}
#grid .weui-grid .weui-grid__icon{
  width: 100%!important;
  height: 100%!important;
}
</style>
