<template>
  <div>
    <app-header></app-header>
    <front-slide></front-slide>
    <div id="articleDetail">
      <h2>{{article.title}}</h2>
      <flexbox>
        <flexbox-item>
          <div class="article_info">{{article.creattime}}</div>
        </flexbox-item>
        <flexbox-item>
          <div class="article_info">{{article.author}}</div>
        </flexbox-item>
      </flexbox>
      <div class="articlecont" v-html="article.content"></div>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import FrontSlide from "@/components/FrontSlide";
import { Flexbox, FlexboxItem } from "vux";
import { getArticleDetail } from '@/network/newlist'

export default {
  name: "articleDetail",
  components: {
    FrontSlide,
    AppHeader,
    Flexbox,
    FlexboxItem
  },
  props: {
    newsId: String
  },
  data() {
    return {
      article:{
        id: '',
        title: '',
        author: '',
        creattime: '',
        content: ''
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    getArticleDetail(){
      let news_id = this.newsId
      getArticleDetail(news_id).then(response=>{
        console.log("detail:", response)
        let data = response.message
        for (let item of data) {
           if(item.id == this.newsId){
             this.article.id = item.id
             this.article.title = item.title
             this.article.author = item.id
             this.article.creattime = item.add_time.substring(0, 10)
             this.article.content = item.zhaiyao
           }
        }
      }, err=>{
          console.log(err)
      })
    }
  },
  created() {},
  mounted() {
    this.getArticleDetail()
  }
};
</script>

<style  scoped>
#articleDetail {
  padding: 10px 15px;
}
#articleDetail h2 {
  text-align: center;
  font-size: 18px;
}
#articleDetail .article_info {
  text-align: center;
  margin: 10px 0px;
  font-size: 13px;
  color: #827f7f;
}
#articleDetail .articlecont {
      margin-top: 20px;
      font-size: 15px;
      color: #38383a;
      text-align: left;
      word-wrap: break-word;
      word-break: normal;
      line-height: 150%;
      padding-bottom: 10px;
}
#articleDetail .articlecont p {
        text-indent: 2em;
        text-align: justify;
        word-wrap: break-word;
        word-break: normal;
}
#articleDetail .articlecont p img {
          text-indent: 0;
}
img {
      display: block;
      width: 100%;
      padding: 10px 0;
      margin-left: 0;
    }

</style>