const Joi = require('joi');

const arrayNumberSchema = Joi.array().items(Joi.number().integer().required());

const validateArrayOfNumbers = (req, res, next) => {
  const { error } = arrayNumberSchema.validate();
  if (error) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }
  return next();
};

module.exports = validateArrayOfNumbers;
