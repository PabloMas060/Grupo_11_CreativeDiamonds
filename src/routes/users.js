const express = require('express');
const router = express.Router();
const {register, login, profile, cart} = require('../controllers/usersController')

/* /users */
router.get('/register', register);
router.get('/login', login);
router.get('/profile', profile);
router.get('/cart', cart);


module.exports = router;
