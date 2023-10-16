const express = require('express');
const router = express.Router();
const { index, about, contact, groups, profile } = require('../controllers/indexController'); 

/* GET home page. */

router.get('/', index);
router.get('/about', about);
router.get('/contact', contact);
router.get('/groups', groups);
router.get('/profile', profile);


module.exports = router;
