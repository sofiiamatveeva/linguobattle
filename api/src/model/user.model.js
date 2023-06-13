// user.js (модель пользователя)
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String, enum: ['male', 'female'] }
});

const User = mongoose.model('User', userSchema);

module.exports = User;