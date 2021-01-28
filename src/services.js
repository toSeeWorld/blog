import request from './utils/request';
import qs from 'qs'

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/auth/login',
    method: 'post',
    loading: 'spin'
  })
}
export  function saveMessage(context) {
  return request({
    url:'/public/get',
    method:'get',
    data:qs.stringify(context),
    loading:'spin'
  })
}
export function getUserByName(param) {
  let data = {
    name:param
  }
  return request({
      url:'/user/info',
      method:"get",
      loading:'spin',
      params:data
     
  })
}
export function getArticle() {
  return request({
    url:'/article/getArticleList',
    method:'get',
    loading:'spin'
  })
  
}
export function saveArticle(title,content) {
    let obj = {
      name:'就TM你叫夏洛啊',
      title,
      htmlContent:content
    }
    return request(
      {
        url:'/article/saveArticle',
        method:'post',
        data:qs.stringify(obj),
        loading:'spin'
      }
    )
  }
  export function editArticle(ele) {
    let obj = {
      name:'就TM你叫夏洛啊',
      title:ele.title,
      htmlContent:ele.htmlContent,
      articleId:ele.articleId
    }
    return request(
      {
        url:'/article/editArticle',
        method:'post',
        data:qs.stringify(obj),
        loading:'spin'
      }
    )
  }
  export function getTags() {
    return request({
      url:'/article/getTags',
      method:'get',
      loading:'spin'
    })
    
  }
  export function getArticleById(id){
    return request({
      url:'/article/getArticleById',
      method:'get',
      params:{id},
      loading:'spin'
    })
  }