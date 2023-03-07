const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const geraToken = (email) => {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ data: { emailUser: email } }, SECRET, jwtConfig);
  return token;
};

module.exports = geraToken;
