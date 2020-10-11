const get = async (ctx, next) => {
    ctx.status = 200
    ctx.body = {
        msg: 'get request!',
        data: {
            data: 'Hello World'
        }
    }
}

module.exports = {
    get
}