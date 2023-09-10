const express = require('express');
const router = express.Router();
const localsCheck = require('../middlewares/localsCheck');
const { index } = require('../controllers/indexController')

/* GET home page. */
router.use(localsCheck); 

router.get('/', index);

module.exports = router;
