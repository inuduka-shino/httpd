/*jslint unparam: true, node: true, nomen:true  */

(function () {
    'use strict';
    var express = require('express'),
        setting = require('../setting/setting_httpd.js'),

        app = express();

    app.get('/', function (req, res) {
        res.sendFile(__dirname + '/top.html');
    });
    app.get('/top.js', function (req, res) {
        res.sendFile(__dirname + '/top.js');
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

