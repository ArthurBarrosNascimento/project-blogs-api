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

const verifyToken = (token) => jwt.verify(token, SECRET);

module.exports = {
  geraToken,
  verifyToken,
};
