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
        <life-column></life-column>
        <owner-article></owner-article>
        <publicity></publicity>
        <bottom></bottom>
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
import LifeColumn from '@/views/home/LifeColumn'
import OwnerArticle from '@/views/home/OwnerArticle'
import Publicity from '@/views/home/Publicity'
import Bottom from '@/components/Bottom'

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
       LifeColumn,
       OwnerArticle,
       Publicity,
       Bottom,
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