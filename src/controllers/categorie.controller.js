const { CategoryService } = require('../services');

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const { message } = await CategoryService.createCategorie(name);
    console.log(message);
    return res.status(201).json(message);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json('Erro banco');
  }
};

const getAllCategories = async (_req, res) => {
  try {
    const { message } = await CategoryService.getAllCategories();
    return res.status(200).json(message);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json('Erro banco');
  }
};

module.exports = {
  createCategory,
  getAllCategories,
};
