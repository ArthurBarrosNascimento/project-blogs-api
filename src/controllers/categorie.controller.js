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

module.exports = {
  createCategory,
};
