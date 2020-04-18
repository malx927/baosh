<template>
    <marquee>
        <marquee-item v-for="i in 5" :key="i" @click.native="onClick(i)" class="align-middle">您的物业缴费时间到啦{{i}}</marquee-item>
    </marquee>
</template>
<script>
import { Marquee, MarqueeItem, Cell, Group } from "vux"

export default {
    name: "FontMarquee",
    components:{
        Marquee,
        MarqueeItem,
        Cell,
        Group,
    }
}
</script>
<style scoped>
.align-middle {
  text-align: center;
  background: #EFEFF4;
}
</style>