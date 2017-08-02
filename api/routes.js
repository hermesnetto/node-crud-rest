const router = require('express').Router();
const user = require('./module/user/routes');

module.exports = function routes(server) {
  server.use('/api', router);
  server.use('/api/user', user);
}
