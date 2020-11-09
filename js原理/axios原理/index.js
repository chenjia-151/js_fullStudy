// axios(config)
// axios.method(url, data, config)


axios.interceptors.request.use(
    (config) => {
        // 在发送请求之前做些什么
        return config
    },
    (error) => {
        {
            // 对请求错误做些什么
            return Promise.reject(error)
        }
    }
)

axios.interceptors.request.use(
    (err) => {
        // 对响应数据做些什么
        return err
    },
    (error) => {
        {
            // 对请求错误做些什么
            return Promise.reject(error)
        }
    }
)