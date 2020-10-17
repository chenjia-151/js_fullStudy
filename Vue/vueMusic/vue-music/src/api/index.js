import Vue from 'vue'
import axios from 'axios'

const vue = new Vue()

// axios 配置
axios.defaults.timeout = 10000   //  设置网络时长 
axios.defaults.baseURL = 'http://localhost:3000'

// 返回状态判断 (响应拦截)  当后端向前端返回数据时发生
axios.interceptors.response.use(
    // 第一个回调函数返回的参数代表的是  传了，但是传错了
    (res) => {
        if (res.data.code !== 200) {
            vue.$toast('网络异常，请重试！')
            return Promise.reject(res)
        }
        return res.data
    },
    // 第二个回调函数返回的参数代表的是 服务器崩溃 
    (error) => {
        vue.$toast('服务器异常')
        return Promise.reject(error)
    }
)


export function fetchGet(url, param) {
    // 返回一个 Promise 对象， 目的是为了能够在 fetchGet被执行后能够 执行 .then
    return new Promise((resolve, reject) => {
        // axios 中原本就有Promise对象，所以能够走 .then 
        axios.get(url, {
            params: param
        })
            .then(
                response => {
                    resolve(response)
                },
                err => {
                    reject(err)
                }
            )
            .catch(error => {
                reject(error)
            })
    })
}


export default {
    // 用户登录
    Login(params) {
        return fetchGet('/login', params)
    },
    // 热门搜索
    HotSearchKey() {
        return fetchGet('/search/hot')
    },
    // 获取歌曲列表  music搜索
    MusicSearch(params) {
        return fetchGet('/search', params)
    },
    // 获取歌曲的url
    MusicUrl(id){
        return fetchGet('/song/url', {   //  id 的接收要以对象的形式
            id
        })
    },
    // 获取排行榜单
    MusicRank(params){
        return fetchGet('/toplist/detail', params)
    },
    // 获取广告
    MusicRankDetail(){
        return fetchGet('/banner')
    },
    // 获取人气歌单
    popularMusic(){
        return fetchGet('/top/playlist')
    },
    // 获取歌手
    singerList(){
        return fetchGet('/toplist/artist')
    }
}