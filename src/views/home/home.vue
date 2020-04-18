<template>
    <div>
        <top-search></top-search>
        <front-slide></front-slide>
        <font-marquee></font-marquee>
    </div>

</template>

<script>

import TopSearch from '@/views/TopSearch'
import FrontSlide from '@/components/FrontSlide'
import FontMarquee from '@/components/FontMarquee'

export default {
   name: "Home",
   components:{
       TopSearch,
       FrontSlide,
       FontMarquee,
   }
}
</script>

<style>

</style>