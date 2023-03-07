const errorMap = require('../utils/errorMap');

module.exports = (req, res, next) => {
  const { email, password } = req.body;
  if (!email && !password) {
  return res
      .status(errorMap.mapError('NOT_IN_FORMAT'))
      .json({ message: 'Some required fields are missing' }); 
  }
  return next();
};
