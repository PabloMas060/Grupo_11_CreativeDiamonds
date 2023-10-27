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
router.use(localsCheck);
router.get('/register', checkNotUserLogin, register);
router.post('/register', uploads.fields([
  {
    name: "mainImage"
  }
]), registerValidation, processRegister);

router.get('/login', checkNotUserLogin, login);
router.post('/login', loginValidation, processLogin);

router.get('/profile', profile);

router.put('/update/:id',profileValidation, uploads.fields([
  {
    name: "mainImage"
  }
]) ,updateProfile);

router.get('/logout', logout);

router.get('/admin',checkAdmin, admin);
router.post('/admin/:typeSearch?', admin);
router.get('/cart', cart);

module.exports = router;
