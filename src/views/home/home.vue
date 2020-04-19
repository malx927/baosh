<template>
    <div>
        <search></search>
        <front-slide></front-slide>
        <font-marquee></font-marquee>
    </div>

</template>

<script>

import Search from '@/views/home/Search'
import FrontSlide from '@/components/FrontSlide'
import FontMarquee from '@/components/FontMarquee'

export default {
   name: "Home",
   components:{
       Search,
       FrontSlide,
       FontMarquee,
   }
}
</script>

<style>

</style>