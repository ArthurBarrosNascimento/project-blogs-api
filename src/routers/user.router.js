const express = require('express');

const router = express.Router();
const { UserController } = require('../controllers');
const validateToken = require('../middleware/validateToken');

router.post('/', UserController.createUser);
router.get('/', validateToken, UserController.getAllUsers);

module.exports = router;
