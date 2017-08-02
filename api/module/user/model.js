const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  birth: Date,
  city: String,
  likes: Array,
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
