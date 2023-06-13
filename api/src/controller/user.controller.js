// Модель пользователя
const User = require('../model/user.model');
// Сервис хеширования пароля
const { generateHash, checkPass } = require('../service/password.service');



// Обработка запроса на регистрацию нового пользователя
const registerUser = async (req, res) => {

  try {
    const { username, password, email, gender } = req.body;

    if (!username || !password || !email) {
      return res.status(400).json({ error: 'Поля: name, email и password являются обязательными' });
    }

    

    //Проверка количества символов в пароле. Добавить if 
    checkPass(password);

    //Хешируем полученный пароль
    const hashedPassword = await generateHash(password);

    //Создание нового пользователя
    const newUser = new User({ username, password:hashedPassword, email, gender });

    //Сохранение
    await newUser.save();

    // Отправка ответа клиенту
    res.status(200).json({ message: 'Пользователь успешно зарегистрирован' });
  } catch (error) {
    // Обработка ошибки
    res.status(400).json({ message: 'Ошибка регистрации пользователя' });
    console.error(error)
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Поиск пользователя в базе данных по имени пользователя
    const user = await User.findOne({ username, password });

    // Проверка пользователя в базе
    if (user) {
      res.status(200).json({ message: "Вход выполнен успешно!" })
    }
    else {
      res.status(401).json({ message: "Неверный логин или пароль." })
    }
  } catch (error) {
    // Обработка ошибки
    res.status(400).json({ message: 'Ошибка регистрации пользователя.' });
    console.error(error)
  }
}

module.exports = {
  registerUser,
  loginUser
};