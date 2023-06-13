// routes.js
const express = require('express');
const userController = require('../controller/user.controller');

const router = express.Router();

// Маршрут для регистрации пользователя
router.post('/api/register', userController.registerUser);

// Маршрут для входа пользователя
router.post('/api/login', userController.loginUser);

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
