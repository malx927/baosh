import {request} from './request'

export function getRemindList(){
  return request({
    url: '/api/getnewslist?key=0df993c66c0c636e29ecbb5344252a4a&start=1&count=5',
  })
}

export function getNoticeList(new_type, count){
  return request({
    url: '/api/getnewslist?key=0df993c66c0c636e29ecbb5344252a4a&start=1&count=5',
    params:{
      new_type,
      count,
    }
  })
}

export function getNewsList(new_type, count){
  return request({
    url: '/api/getnewslist?key=0df993c66c0c636e29ecbb5344252a4a&start=1&count=5',
    params:{
      new_type,
      count,
    }
  })
}

export function getEventList(new_type, count){
  return request({
    url: '/api/getnewslist?key=0df993c66c0c636e29ecbb5344252a4a&start=1&count=5',
    params:{
      new_type,
      count,
    }
  })
}

export function getLifeColumnList(new_type, count){
  return request({
    url: '/api/getnewslist?key=0df993c66c0c636e29ecbb5344252a4a&start=1&count=5',
    params:{
      new_type,
      count,
    }
  })
}

export function getOwnerArticleList(new_type, count){
  return request({
    url: '/api/getnewslist?key=0df993c66c0c636e29ecbb5344252a4a&start=1&count=5',
    params:{
      new_type,
      count,
    }
  })
}

export function getArticleDetail(newsId){
  return request({
    url: '/api/getnewslist?key=0df993c66c0c636e29ecbb5344252a4a&start=1&count=5',
    params:{
      newsId,
    }
  })
}