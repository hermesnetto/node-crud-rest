const User = require('./model');
const handleResponse = require('../../utils/handle-response');

module.exports = {
  /**
   * Lista todos os usuários
   */
  list: (req, res) => {
    const messages = {
      error: 'Nenhum usuário cadastrado',
    };
    User.find({}, (err, user) => handleResponse(res, err, user, messages));
  },

  /**
   * Exibe um usuário específico
   */
  get: (req, res) => {
    const messages = {
      error: `Nenhum usuário cadastrado com o id '${req.params.id}'`,
    }
    User.findById(req.params.id, (err, user) => handleResponse(res, err, user, messages));
  },

  /**
   * Cria um novo usuário
   */
  save: (req, res) => {
    const messages = {
      error: 'Erro ao cadastrar o usuário',
      success: 'Usuário cadastrado com sucesso',
    }
    User.create(req.body, (err, user) => handleResponse(res, err, user, messages));
  },

  /**
   * Atualiza um usuário existente
   */
  update: (req, res) => {
    User.findById(req.params.id, (err, user) => {
      if (err) {
        res.status(500).json({
          result: false,
          error: err,
          message: `Nenhum usuário cadastrado com o '${req.params.id}'`
        });
      } else {
        const messages = {
          error: 'Erro ao editar usuário',
          success: 'Usuário editado com sucesso',
        };

        user.name = req.body.name || user.name;
        user.city = req.body.city || user.city;
        user.birth = req.body.birth || user.birth;
        user.likes = req.body.likes || user.likes;

        user.save((newErr, newUser) => handleResponse(res, newErr, newUser, messages));
      }
    });
  },

  /**
   * Remove um usuário do banco
   */
  remove: (req, res) => {
    const messages = {
      error: 'Erro ao remover usuário',
      success: 'Usuário removido com sucesso',
    };
    User.findByIdAndRemove(req.params.id, (err, user) => handleResponse(res, err, user));
  },
};
