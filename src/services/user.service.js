const { User } = require('../models');

const verifiedEmailUser = async (emailVerify) => {
  const userEmail = await User.findOne({ where: { email: emailVerify } });
  if (userEmail === null) return { type: '', message: null };
  return { type: null, message: true };
};

module.exports = {
  verifiedEmailUser,
};
