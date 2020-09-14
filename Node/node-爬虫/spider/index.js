const https = require('https')
const cheerio = require('cheerio')
const fs = require('fs')
const { stringify } = require('querystring')

// 通过https模块的get方法，请求网站链接,在回调函数中获取资源
https.get('https://movie.douban.com/top250', (res) => {
    // console.log(res);
    // 因为获取到的资源是分段返回的，所以需要手动拼接(html)
    let html = ''
    // res.on类似于addEventlistener
    res.on('data', (chunk) => {
        // 将数据拼接到html中
        html += chunk
    })

    // 当res数据加载完成时，去执行xx事件、逻辑
    res.on('end', () => {

        // 操作DOM结构  通过cheerio.load()事件来实现
        const $ = cheerio.load(html)

        // 存放爬取到的数据
        let allFilms = []
        $('li .item').each(function () {   //  each ==> for 循环
            const title = $('.title', this).text()     //  取DOM结构中的文本内容
            const star = $('.rating_num', this).text()
            const pic = $('.pic img', this).attr('src')   //  取DOM结构中的图片内容
            const inq = $('.inq', this).text()
            allFilms.push({ title, star, pic, inq })
        })
        // console.log(allFilms);
        fs.writeFile('files.json', JSON.stringify(allFilms), (err) => {
            if (err) throw err;
            console.log('文件已被保存');
        })
    })
})