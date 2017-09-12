// Count all of the links from the Node.js build page 
var jsdom = require("node-jsdom");
 
jsdom.env(
  "http://www.richen.fi",
  function (errors, window) {
    console.log(window);
  }
);