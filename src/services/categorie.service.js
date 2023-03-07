const { Category } = require('../models');

const createCategorie = async (name) => {
  const categorie = await Category.create({ name });
  return { type: null, message: categorie };
};

module.exports = {
  createCategorie,
};