/*jslint unparam: true, node: true, nomen:true  */

(function () {
    'use strict';
    var express = require('express'),
        setting = require('../setting/setting_httpd.js'),
        sampleRouter = require('../sample/'),

        app = express();

    app.get('/', function (req, res) {
        res.sendFile(__dirname + '/top.html');
    });
    app.get('/top.js', function (req, res) {
        res.sendFile(__dirname + '/top.js');
    });

    app.use(
        '/pub/',
        express.static(setting.path, {
            maxAge: '1d'
        })
    );

    app.use('/sample', sampleRouter);

    console.log('start service on ' + setting.port);
    app.listen(setting.port);
}());

