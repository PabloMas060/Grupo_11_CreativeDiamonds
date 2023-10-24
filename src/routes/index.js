const express = require('express');
const router = express.Router();
const { index, about, contact, groups, profile, notices, notice, fans, capsule, editProfile, cart, selfcart, giftcart, cardInfo, checkout } = require('../controllers/indexController'); 

/* GET home page. */

router.get('/', index);
router.get('/about', about);
router.get('/contact', contact);
router.get('/groups', groups);
router.get('/profile', profile);
router.get('/notices/:id', notices);
router.get('/notice/:id', notice)
router.get('/fans', fans);
router.get('/capsule', capsule);
router.get('/editProfile.ejs', editProfile);
router.get('/cart', cart);
router.get('/selfcart', selfcart);
router.get('/giftcart', giftcart);
router.get('/cardInfo', cardInfo);
router.get('/checkout', checkout);


module.exports = router;
