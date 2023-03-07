const express = require('express');

const router = express.Router();

const validateLoginFields = require('../middleware/validateLoginFileds');
const { UserController } = require('../controllers');

router.post('/', validateLoginFields, UserController.verifiedIfEmailIsValid);

module.exports = router;
