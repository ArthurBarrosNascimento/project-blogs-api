const Joi = require('joi');

const displayNameSchema = Joi.string().min(8).required();

const emailSchema = Joi.string().email().required();

const passwordSchema = Joi.string().min(6).required();

const arrayNumberSchema = Joi.array().items(Joi.number().integer().required());

module.exports = {
  displayNameSchema,
  emailSchema,
  passwordSchema,
  arrayNumberSchema,
};
