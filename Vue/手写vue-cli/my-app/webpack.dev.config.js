const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    // mode: 'development',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        // 确保引入了这个插件 VueLoaderPlugin
        new VueLoaderPlugin()
    ]
}