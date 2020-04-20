<template>
    <div>
        <search></search>
        <front-slide></front-slide>
        <font-marquee></font-marquee>
        <notice-list></notice-list>
        <news-list></news-list>
        <house-keeper></house-keeper>
        <company-events></company-events>
        <company-service></company-service>
  </div>

</template>

<script>

import Search from '@/views/home/Search'
import FrontSlide from '@/components/FrontSlide'
import FontMarquee from '@/components/FontMarquee'
import NoticeList from '@/views/home/NoticeList'
import NewsList from '@/views/home/NewsList'
import HouseKeeper from '@/views/home/HouseKeeper'
import CompanyEvents from '@/views/home/CompanyEvents'
import CompanyService from '@/views/home/CompanyService'

export default {
   name: "Home",
   components:{
       Search,
       FrontSlide,
       FontMarquee,
       NoticeList,
       NewsList,
       HouseKeeper,
       CompanyEvents,
       CompanyService,
   }
}
</script>

<style>
html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
</style>