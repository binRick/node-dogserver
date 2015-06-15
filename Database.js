var r = require('rethinkdb');


require('rethinkdb-init')(r);

r.init({
    host: process.env.rethinkDBhost||'localhost',
    port: process.env.rethinkDBport||'28015',
    db: process.env.rethinkDBdb||'helloDatabase',
  },
  [
    {
      name: process.env.rethinkDBtable||'helloTable',
      indexes: [{name: 'key' }, {
        name: 'location',
        geo: true,
        multi: true,
      }]
    },
  ]
)
.then(function (conn) {
console.log('All tables and indexes have been created');
});
