const bcrypt = require('bcrypt');
const User = require('../model/user.model');

const checkPass = (password) => {
  const minLength = 8; // Минимальная длина пароля
  const hasDigits = /[0-9]/.test(password); // Проверка наличия цифр
  const hasLowerCase = /[a-z]/.test(password); // Проверка наличия строчных букв
  const hasUpperCase = /[A-Z]/.test(password); // Проверка наличия заглавных букв

  if (password.length < minLength) {
    const error = new Error('Пароль должен содержать больше 8 символов');
    error.statusCode = 400;
    throw error;
  }

  if (!hasDigits) {
    const error = new Error('Пароль должен содержать хотя бы одну цифру');
    error.statusCode = 400;
    throw error;
  }

  if (!hasLowerCase || !hasUpperCase) {
    const error = new Error('Пароль должен содержать как минимум одну строчную и одну заглавную букву');
    error.statusCode = 400;
    throw error;
  }
}

const generateHash = async(password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
  } catch (error) {
    // Обработка ошибки
    throw new Error('Ошибка генерации хеш пароля');
  }
}

module.exports = {
  checkPass,
  generateHash
};