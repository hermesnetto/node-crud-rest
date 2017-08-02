const mongoose = require('mongoose');

// utiliza Promise nativa do node.js
mongoose.Promise = global.Promise;

// alterando mensagem de erro padrão
mongoose.Error.messages.general.required = 'O atributo {PATH} é obrigatório.';

// conexão com o banco
module.exports = mongoose.connect('mongodb://localhost/crud', {
  useMongoClient: true,
});
