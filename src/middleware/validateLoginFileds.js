module.exports = (req, res, next) => {
  const { email, password } = req.body;
  if (email.length < 1 || password.length < 1) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  } 
  
  return next();
};