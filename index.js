const jsdom = require('node-jsdom')
//const urlsToScrape = ['http://www.richen.fi', 'http://www.hs.fi', 'https://flunssatutka.fi/']
const urlsToScrape = ['http://www.richen.fi']
const domElementToCheck = 'div'
const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

app.get('/html',function(req,res) {
    checkUrl(urlsToScrape[0],'div', function(html){
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
            const elementCount = window.$(domElement).length
            const pageTitle = window.$('title').text()
            const domLength = window.$('*').html().length
            const pageHtml = window.$('*').html()
            callback(pageHtml)
            //console.log(`${pageTitle} has ${elementCount} ${domElement}-elements and a DOM-length of ${domLength} chars`)
            }
    })
}

/*for(let i=0;i<urlsToScrape.length;i++) {
    checkUrl(urlsToScrape[i], 'div')
}*/