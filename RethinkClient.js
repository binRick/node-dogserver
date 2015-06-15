#!/usr/bin/env node

var r = require('rethinkdb'),
    pj = require('prettyjson'),
    os = require('os'),
    fs = require('fs'),
    trim = require('trim'),
    child = require('child_process');


r.connect({
    host: process.env.rethinkDBhost || 'localhost',
    port: process.env.rethinkDBport || '28015',
}, function(err, conn) {
    if (err) throw err;
    var Update = {
        asd: process.argv[2] || 123
    };
    var key = 1;
    r.db(process.env.rethinkDatabase || 'helloDatabase').table(process.env.rethinkTable || 'helloTable').
    filter(r.row('key').eq(key)).update(Update).
    run(conn, function(err, res) {
        if (err) throw err;
        console.log(res);
        console.log(res.replaced);
        if (res.replaced == 0) {
            var Ins = [{
                key: key,
                location: {}
            }];
            console.log(Ins);
            r.db(process.env.rethinkDatabase || 'helloDatabase').table(process.env.rethinkTable || 'helloTable').insert(Ins).run(conn, function(err, result) {
                if (err) throw err;
                console.log(result);
            });
        }

    });

});
