const { displayNameSchema, passwordSchema, emailSchema, arrayNumberSchema } = require('./shemas');

const validateDisplayName = (displayName) => {
  const { error } = displayNameSchema.validate(displayName);
  if (error) {
    return { type: 400, message: '"displayName" length must be at least 8 characters long' };
  }
  return { type: null, message: '' };
};

const validateEmail = (email) => {
  const { error } = emailSchema.validate(email);
  if (error) {
    return { type: 400, message: '"email" must be a valid email' };
  }
  return { type: null, message: '' };
};

const validatePassword = (password) => {
  const { error } = passwordSchema.validate(password);
  if (error) {
    return { type: 400, message: '"password" length must be at least 6 characters long' };
  }
  return { type: null, message: '' };
};

const validateArrayOfNumbers = (array) => {
  const { error } = arrayNumberSchema.validate(array);
  if (error) {
    return { type: 400, message: 'one or more "categoryIds" not found' };
  }
  return { type: null, message: '' };
};

module.exports = {
  validateDisplayName,
  validateEmail,
  validatePassword,
  validateArrayOfNumbers,
};
