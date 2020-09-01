import axios from 'axios'

const baseUrl = 'http://ustbhuangyi.com/sell/'

export function get(url) {
    return function(params = {}){
        return axios.get(baseUrl + url)
    }
}