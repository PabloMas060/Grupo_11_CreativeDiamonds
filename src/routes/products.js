const express = require('express');
const router = express.Router();
const {detail, vinilos, indumentaria, shows, edit} = require('../controllers/productsController')

/* /users */
router.get('/detail/:id', detail);
router.get('/vinilos', vinilos);
router.get('/indumentaria', indumentaria);
router.get('/shows', shows);
router.get('/edit/:id', edit)

module.exports = router;
