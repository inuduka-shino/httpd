/*jslint unparam: true, node: true */

var express = require('express'),
    setting = require('../setting/httpd.js');

(function () {
    'use strict';
    var app = express();

    app.get('/', function (req, res) {
        res.send('hello world');
    });

    app.use('/pub/', express.static(setting.path));

    app.listen(setting.port);
}());

