const express = require('express');
const router = express.Router();
const { index, about, contact, groups, notices, notice} = require('../controllers/indexController'); 

/* GET home page. */
router
.get('/', index)
.get('/about', about)
.get('/contact', contact)
.get('/groups', groups)
.get('/notices', notices)
.get('/notice', notice)


module.exports = router;
