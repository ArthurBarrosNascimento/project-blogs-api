const { User } = require('../models');

const schema = require('./validations/validateInputsLogin');

const verifiedEmailUser = async (emailVerify) => {
  const userEmail = await User.findOne({ where: { email: emailVerify } });
  console.log(userEmail);
  if (userEmail === null) return { type: '', message: null };
  return { type: null, message: true };
};

const createUser = async (displayName, email, password, image) => {
  const errorName = schema.validateDisplayName(displayName);
  if (errorName.type) return errorName;

  const errorEmail = schema.validateEmail(email);
  if (errorEmail.type) return errorEmail;

  const errorPassword = schema.validatePassword(password);
  if (errorPassword.type) return errorPassword;

  const verifyIfExist = await verifiedEmailUser(email);
  if (verifyIfExist.message) return { type: 409, message: 'User already registered' };

  const userCreate = await User.create({ displayName, email, password, image });
  return { type: null, message: userCreate };
};

const getAll = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return { type: null, message: users };
};

const getUserById = async (id) => {
  const user = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
  return { type: null, message: user };
};

module.exports = {
  verifiedEmailUser,
  createUser,
  getAll,
  getUserById,
};
