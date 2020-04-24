<template>
  <x-header :left-options="{showBack: true}" >{{tag}}</x-header>
</template>

<script>
import { XHeader } from 'vux'

export default {
  name: "AppHeader",
  components: {
    XHeader,
  },

  props: {
    tag: String
  },

  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style  scoped>

</style>