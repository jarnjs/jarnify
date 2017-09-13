const jsdom = require("node-jsdom")
 
jsdom.env(
    "http://www.richen.fi", 
    (errors, window) => console.log(window)
)