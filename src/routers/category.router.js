const express = require('express');

const router = express.Router();
const validateCategoryFields = require('../middleware/validateCategoryFiels');
const validateToken = require('../middleware/validateToken');
const { CategoryController } = require('../controllers');

router.post('/', validateToken, validateCategoryFields, CategoryController.createCategory);
router.get('/', validateToken, CategoryController.getAllCategories);

module.exports = router;
