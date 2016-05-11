var path = require("path");
var Builder = require('systemjs-builder');

var builder = new Builder("target/webapp", "target/webapp/system-config.js");

builder
    .bundle('salka/main.js - [libs/**/*]', 'target/webapp/app.js', { minify: true })
    .then(function() {
      console.log("app.js complete");
    })
    .catch(function(err) {
      console.log('Build error');
      console.log(err);
    });

builder
    .bundle('salka/main.js - [salka/**/*]', 'target/webapp/vendor.js', { minify: true })
    .then(function() {
        console.log("vendor.js complete");
    })
    .catch(function(err) {
        console.log('Build error');
        console.log(err);
    });
