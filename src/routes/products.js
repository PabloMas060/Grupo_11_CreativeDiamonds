const express = require('express');
const router = express.Router();
const { detail, vinilos, indumentaria, shows, edit, createVinyl, addVinyl, addShirt, createShirt, detailShirt } = require('../controllers/productsController');
const { upload } = require('../middlewares/upload');

/* /products */
router
  /* ADD PARA VINILOS */
  .get('/addVinyl', addVinyl)
  .post('/addVinyl', upload.fields([
    {
      name: "mainImage"
    },
    {
      name: "images"
    }
  ]), createVinyl)
  /* ADD PARA SHIRTS */
  .get('/addShirt', addShirt)
  .post('/addShirt', upload.fields([
    {
      name: "mainImage"
    }
  ]), createShirt)

  .get('/detail/:id', detail)
  .get('/vinilos', vinilos)
  .get('/indumentaria', indumentaria)
  .get('/shows', shows)

  .get('/edit/:id', edit)

  .get('/detail-shirt/:id', detailShirt); 
module.exports = router;
