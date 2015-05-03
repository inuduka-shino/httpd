/*jslint unparam: true, node: true, nomen:true  */

(function () {
    'use strict';
    var express = require('express'),
        bodyParser = require('body-parser'),
        setting = require('../setting/setting_httpd.js'),

        app = express();

    // apiパスはbodyParseする
    app.use('*/api/*', bodyParser());

    app.get('/', function (req, res) {
        res.sendFile(setting.topPath + '/top.html');
    });
    app.get('/top.js', function (req, res) {
        res.sendFile(setting.topPath + '/top.js');
    });
    app.get('/favicon.ico', function (req, res) {
        res.sendFile(setting.favicon);
    });

    app.use(
        '/pub/',
        express.static(setting.pubPath, {
            maxAge: '1d'
        })
    );

    app.use('/sample', require('../sample/'));

    //
    app.use('/mbs', require('../makeBookSupporter/'));

    console.log('start service on ' + setting.port);
    app.listen(setting.port);
}());

