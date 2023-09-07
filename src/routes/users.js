const express = require('express');
const router = express.Router();
const {register, processRegister,login, processLogin, profile, updateProfile, cart, admin, logout } = require('../controllers/usersController')
const registerValidation = require('../validation/registerValidation');
const { uploads } = require('../middlewares/uploads');
/* /users */
router.get('/register', register);
router.post('/register', uploads.fields([
    {
      name: "mainImage"
    }
  ]),registerValidation, processRegister);
router.get('/login', login);
router.post('/login', processLogin);
router.get('/profile', profile);
router.put('/update-profile', updateProfile);
router.get('/logout', logout);

router.get('/admin', admin);
router.post('/admin/:typeSearch?', admin);
router.get('/cart', cart)


module.exports = router;
