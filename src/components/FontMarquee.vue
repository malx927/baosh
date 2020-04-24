<template>
  <marquee>
    <marquee-item v-for="(item, index) in list" :key="index" @click.native="onClick(item.id)" class="align-middle">{{item.title}}</marquee-item>
  </marquee>
</template>
<script>
import { Marquee, MarqueeItem, Cell, Group } from "vux";
import { getRemindList } from "@/network/newlist";
export default {
  name: "FontMarquee",
  components: {
    Marquee,
    MarqueeItem,
    Cell,
    Group
  },
  data(){
    return {
        list: []
    }  
  },
  methods: {
    getRemindList() {
      getRemindList().then(response=>{
          console.log(response)
          let data = response.message
          let list = []
          for( let i in data){
              list[i] = {}
              list[i].title = data[i].title
              list[i].id = data[i].id
          }
          this.list = list
      });
    },
    onClick(itemId){
        this.$router.push(`/detail/${itemId}`)
    },
  },
  mounted() {
    this.getRemindList();
  }
};
</script>
<style scoped>
.align-middle {
  text-align: center;
  background: #efeff4;
}
</style>