const server = require('express')();
const bodyParser = require('body-parser');
const queryParser = require('express-query-int');

const port = 3003;

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization');
  next();
});
server.use(queryParser());

/**
 * Inicia o servidor na porta 3003
 */
server.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});

module.exports = server;
