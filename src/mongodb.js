const mogoose = require('mongose');

mogoose.connect('mongodb://data/db')
.then(db => console.log('DB in connected to ', db.connection.host))
.catch(error => console.error(error));