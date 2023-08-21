const express = require('express');
const router = express.Router();
const { detail, detailShirt, vinilos, indumentaria, shows, add, edit, create } = require('../controllers/productsController');
const { upload } = require('../middlewares/upload');

/* /products */
router
    .get('/add', add)
    .post('/add', upload.fields([
        {
            name: "mainImage"
        },
        {
            name: "images"
        }
    ]), create)
    .get('/detail/:id', detail) 
    .get('/detail-shirt/:id', detailShirt)
    .get('/vinilos', vinilos)
    .get('/indumentaria', indumentaria)
    .get('/shows', shows)
    .get('/edit/:id', edit);

module.exports = router;
