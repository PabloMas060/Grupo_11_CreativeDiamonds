const express = require('express');
const router = express.Router();
const { index, about, contact, groups, notices, notice, fans, capsule, editProfile, cart, selfcart, giftcart, cardInfo, checkout, prueba1, prueba2, prueba3, prueba4 } = require('../controllers/indexController'); 

/* GET home page. */

router.get('/', index);
router.get('/about', about);
router.get('/contact', contact);
router.get('/groups', groups);
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
router.get('/prueba1', prueba1);
router.get('/prueba2', prueba2);
router.get('/prueba3', prueba3);
router.get('/prueba4', prueba4);



module.exports = router;
