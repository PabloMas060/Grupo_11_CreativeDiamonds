const express = require('express');
const router = express.Router();
const {register, login, profile, cart, admin, } = require('../controllers/usersController')

/* /users */
router.get('/register', register);
router.get('/login', login);
router.get('/admin', admin);
router.post('/admin', admin);
router.get('/profile', profile);
router.get('/cart', cart);


module.exports = router;
