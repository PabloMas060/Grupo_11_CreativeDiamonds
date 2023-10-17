const express = require('express');
const router = express.Router();
const localsCheck = require('../middlewares/localsCheck');
const checkUserLogin = require('../middlewares/checkUserLogin')
const checkNotUserLogin = require('../middlewares/checkNotUserLogin');
const checkAdmin = require('../middlewares/checkAdmin');
const { register, processRegister, login, processLogin, profile, updateProfile, cart, admin, logout } = require('../controllers/usersController');
const registerValidation = require('../validation/registerValidation');
const loginValidation = require('../validation/loginValidation');
const { uploads } = require('../middlewares/uploads');
const profileValidation = require('../validation/profileValidation');
/* /users */
/* router.use(localsCheck); */

router
/* .get('/cart', cart) */
.get('/admin', admin)

module.exports = router;
