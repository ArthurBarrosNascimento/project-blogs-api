require('dotenv/config');
const { UserService } = require('../services');
const token = require('../utils/token');

const verifiedIfEmailIsValid = async (req, res) => {
  const { email } = req.body;
  console.log(email);
  const { message } = await UserService.verifiedEmailUser(email);
  if (!message) {
    return res.status(400)
      .json({ message: 'Invalid fields' });
  }
  const newToken = token(email);
  res.status(200).json({ token: newToken });
};

module.exports = {
  verifiedIfEmailIsValid,
};
