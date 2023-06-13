// validation.service.js

const validateField = (fieldName, value, rules) => {
    for (const rule of rules) {
      if (!rule.condition(value)) {
        throw new Error(rule.message(fieldName));
      }
    }
  };
  
  const validateUser = (user) => {
    const validationRules = [
      {
        condition: (value) => value.length >= 8,
        message: (fieldName) => `${fieldName} должно содержать не менее 8 символов`,
      },
      {
        condition: (value) => value.length <= 21,
        message: (fieldName) => `${fieldName} должно содержать не больше 21 символа`
      },
      {
        condition: (value) => /[0-9]/.test(value),
        message: (fieldName) => `${fieldName} должно содержать хотя бы одну цифру`,
      },
      {
        condition: (value) => /[a-z]/.test(value) && /[A-Z]/.test(value),
        message: (fieldName) => `${fieldName} должно содержать как минимум одну строчную и одну заглавную букву`,
      },
      {
        condition: (value) => /[a-z]/.test(value) || /[A-Z]/.test(value),
        message: (fieldName) => `${fieldName} должно содеражть только латинские буквы`
      },
      // Дополнительные правила проверки, если необходимо
    ];
  
    const fieldsToValidate = [
      { name: 'username', value: user.username },
      { name: 'password', value: user.password },
      { name: 'email', value: user.email },
      // Дополнительные поля для проверки, если необходимо
    ];
  
    for (const field of fieldsToValidate) {
      try {
        validateField(field.name, field.value, validationRules);
      } catch (error) {
        throw new Error(`Неверное значение для поля ${field.name}: ${error.message}`);
      }
    }
  };
  
  module.exports = {
    validateUser,
  };