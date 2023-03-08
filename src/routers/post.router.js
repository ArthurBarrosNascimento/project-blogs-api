const express = require('express');

const router = express.Router();

const { PostController } = require('../controllers');
const validateToken = require('../middleware/validateToken');
const validatePostFields = require('../middleware/validatePostFields');

router.post('/', validatePostFields, validateToken, PostController.createPost);

module.exports = router;