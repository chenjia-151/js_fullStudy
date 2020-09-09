import Vue from 'vue'
import axios from 'axios'

const vue = new Vue()

// axios 配置
axios.defaults.timeout = 10000   //  设置网络时长 
axios.defaults.baseUrl = 'http://localhost:3000'

// 返回状态判断 (响应拦截)  当后端向前端返回数据时发生
axios.interceptors.response.use(
    // 第一个回调函数返回的参数代表的是  传了，但是传错了
    (res) => {
        if (res.data.code !== 200) {
            vue.$toast('网络异常，请重试！')
            return Promise.reject(res)
        }
        return res
    },
    // 第二个回调函数返回的参数代表的是 服务器崩溃 
    (error) => {
        vue.$toast('服务器异常')
        return Promise.reject(error)
    }
)


export function fetchGet(url, param) {
    return new Promise((resolve, reject) => {
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


export default{
    // 用户登录
    Login(params){
        return fetchGet('/login', params)
    },
    // 热门搜索
    HotSearchKey(){
        return fetchGet('/search/hot')
    }
}