const jsdom = require('node-jsdom')
const urlsToScrape = ['http://www.richen.fi', 'http://www.hs.fi', 'https://flunssatutka.fi/']
const domElementToCheck = 'div'


function checkUrl(url, domElement) {

    jsdom.env({
        url: url,
        scripts: ['https://code.jquery.com/jquery-2.1.1.js'],
        loaded(errors, window) {
            const elementCount = window.$(domElement).length
            const pageTitle = window.$('title').text()
            const domLength = window.$('*').html().length
            console.log(`${pageTitle} has ${elementCount} ${domElement}-elements and a DOM-length of ${domLength} chars`)
            }
    })
}

for(let i=0;i<urlsToScrape.length;i++) {
    checkUrl(urlsToScrape[i], 'div')
}