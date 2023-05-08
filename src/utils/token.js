const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const geraToken = (email, id) => {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ data: { emailUser: email, userId: id } }, SECRET, jwtConfig);
  return token;
};

const verifyToken = (token) => jwt.verify(token, SECRET);

module.exports = {
  geraToken,
  verifyToken,
};
