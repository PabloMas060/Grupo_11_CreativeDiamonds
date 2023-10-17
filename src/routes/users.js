const express = require('express');
const router = express.Router();
const localsCheck = require('../middlewares/localsCheck');
const checkUserLogin = require('../middlewares/checkUserLogin')
const checkNotUserLogin = require('../middlewares/checkNotUserLogin');
const checkAdmin = require('../middlewares/checkAdmin');
const { register, processRegister, login, processLogin, profile, editProfile, cart, selfCart, giftCart, cardDetail, checkout, admin, logout } = require('../controllers/usersController');
const registerValidation = require('../validation/registerValidation');
const loginValidation = require('../validation/loginValidation');
const { uploads } = require('../middlewares/uploads');
const profileValidation = require('../validation/profileValidation');
/* /users */
/* router.use(localsCheck); */

router
/* .get('/cart', cart) */
.get('/admin', admin)
.get('/profile', profile)
.get('/editProfile', editProfile)
.get('/cart', cart)
.get('/selfCart', selfCart)
.get('/giftCart', giftCart)
.get('/cardDetail', cardDetail)
.get('/checkout', checkout)

module.exports = router;
