var r = require('rethinkdb');
require('rethinkdb-init')(r);

module.exports = function(cb) {
    var Setup = {
        host: process.env.rethinkDBhost || 'localhost',
        port: process.env.rethinkDBport || '28015',
        db: process.env.rethinkDBdb || 'helloDatabase',
        table: process.env.rethinkDBtable || 'dogLocations',
        Indexes: [{
            name: 'key'
        }, {
            name: 'location',
            geo: true,
            multi: true,
        }],
    };
    r.init(Setup, [{
        name: Setup.table,
        indexes: Setup.Index,
    }, ]).then(function(conn) {
        Setup.conn = conn;
        console.log('All tables and indexes have been created');
        cb(Setup);
    });

};
