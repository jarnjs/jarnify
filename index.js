const jsdom = require('node-jsdom')
const urlsToScrape = ['http://www.richen.fi', 'http://www.hs.fi', 'https://flunssatutka.fi/']
const domElementToCheck = 'div'
const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const imgUrl = 'https://media.riemurasia.net/albumit/mmedia/ym/y3v/jbsz/58767/1320622347.gif'

app.get('/html',function(req,res) {
    checkUrl(urlsToScrape[1],'img', function(html){
        res.send(html)
    })
})

app.listen(port, function(){
    console.log(`server start on port ${port}`)
})

function checkUrl(url, domElement, callback) {
    jsdom.env({
        url: url,
        scripts: ['https://code.jquery.com/jquery-2.1.1.js'],
        loaded(errors, window) {
            const $ = window.$;
            const element = $(domElement)
            const pageHtml = $('*')
            pageHtml.find('img').each(function(i,el) {
                el.src = imgUrl
            })
            callback(pageHtml.html())
            //console.log(`${pageTitle} has ${elementCount} ${domElement}-elements and a DOM-length of ${domLength} chars`)
            }
    })
}

/*for(let i=0;i<urlsToScrape.length;i++) {
    checkUrl(urlsToScrape[i], 'div')
}*/