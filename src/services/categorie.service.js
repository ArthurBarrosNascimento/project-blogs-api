const { Category } = require('../models');

const createCategorie = async (name) => {
  const categorie = await Category.create({ name });
  return { type: null, message: categorie };
};

const getAllCategories = async () => {
  const categories = await Category.findAll();
  return { type: null, message: categories };
};

module.exports = {
  createCategorie,
  getAllCategories,
};