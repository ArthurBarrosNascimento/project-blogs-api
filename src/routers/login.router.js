const express = require('express');

const router = express.Router();

const validateLoginFields = require('../middleware/validateLoginFileds');
const { LoginController } = require('../controllers');

router.post('/', validateLoginFields, LoginController.verifiedIfEmailIsValid);

module.exports = router;
