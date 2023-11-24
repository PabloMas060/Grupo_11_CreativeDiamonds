const express = require('express');
const { checkEmail, checkPassword } = require('../controllers/apiController');
const router = express.Router();

/* /apis */
router.get('/check-email', checkEmail);
router.get('/check-password', checkPassword)


module.exports = router;