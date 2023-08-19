const express = require('express');
const router = express.Router();
const { detail, vinilos, indumentaria, shows, add, edit } = require('../controllers/productsController')

/* /products */
router
    .get('/add', add)
  /*   .post('/add', create) */
    .get('/detail/:id', detail)
    .get('/vinilos', vinilos)
    .get('/indumentaria', indumentaria)
    .get('/shows', shows)
 
    .get('/edit/:id', edit)

module.exports = router;
