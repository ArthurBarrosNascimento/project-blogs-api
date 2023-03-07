require('dotenv/config');
const { UserService } = require('../services');
const token = require('../utils/token');

const verifiedIfEmailIsValid = async (req, res) => {
  try {
    const { email } = req.body;
    const { message } = await UserService.verifiedEmailUser(email);
    if (!message) {
      return res.status(400)
        .json({ message: 'Invalid fields' });
    }
    const newToken = token(email);
    return res.status(200).json({ token: newToken });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json('Erro banco');
  }
};

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const { type, message } = await UserService.createUser(displayName, email, password, image);
    if (type) return res.status(type).json({ message });
    const newToken = token(email);
    return res.status(201).json({ token: newToken });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json('Erro banco');
  } 
};

module.exports = {
  verifiedIfEmailIsValid,
  createUser,
};
