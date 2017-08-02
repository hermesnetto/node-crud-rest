const server = require('./api/server');
require('./api/database');
require('./api/routes')(server);
