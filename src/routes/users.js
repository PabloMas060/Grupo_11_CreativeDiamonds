const express = require('express');
const router = express.Router();
const {register, processRegister,login, processLogin, profile, updateProfile, cart, admin, logout } = require('../controllers/usersController')

/* /users */
router.get('/register', register);
router.post('/register', processRegister);
router.get('/login', login);
router.post('/login', processLogin);
router.get('/profile', profile);
router.put('/update-profile', updateProfile);
router.get('/logout', logout);

router.get('/admin', admin);
router.post('/admin/:typeSearch?', admin);
router.get('/cart', cart)


module.exports = router;
