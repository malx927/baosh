<template>
  <div id="fooder">
    <tabbar style="position:fixed">
      <tabbar-item :link="{path:'/'}" :selected="index==0" v-model="index">
        <img slot="icon" src="../assets/image/ic_nav_news_normal.png">
        <img slot="icon-active" src="../assets/image/ic_nav_news_actived.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/application'}" :selected="index==1" v-model="index">
        <img slot="icon" src="../assets/image/ic_nav_app_normal.png">
        <img slot="icon-active" src="../assets/image/ic_nav_app_actived.png">
        <span slot="label">留言</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/mysettings'}" :selected="index==2" v-model="index">
        <img slot="icon" src="../assets/image/ic_nav_my_normal.png">
        <img slot="icon-active" src="../assets/image/ic_nav_my_pressed.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<style lang='less'>
  #fooder{
    .weui-tabbar__icon{
      width: 22px;
      height: 22px;
       img{
        width: 22px;
        height: 22px;
      }
    }
    .weui-tabbar{
      height: 56px;
      background-color: #ffffff;
    }
    .weui-tabbar__item{
      padding: 10px 0 0;
    }
  }
</style>
<script>
  import { Tabbar,TabbarItem } from 'vux'
  export default{
    name: 'Footer',
    components: {
      Tabbar,
      TabbarItem,
    },
    data(){
      return{
        index:0
      }
    },
    methods:{

    }

  }

</script>
