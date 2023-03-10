const express = require('express');

const router = express.Router();

const { PostController } = require('../controllers');
const validateToken = require('../middleware/validateToken');
const validatePostFields = require('../middleware/validatePostFields');
const validatePostCategorys = require('../middleware/validateCategory');

router.post('/',
  validatePostFields,
  validatePostCategorys,
  validateToken,
  PostController.createPost);

router.get('/', validateToken, PostController.getAllBlogUserCategory);
router.get('/:id', validateToken, PostController.getAllBlogsUserCategoryById);

module.exports = router;
