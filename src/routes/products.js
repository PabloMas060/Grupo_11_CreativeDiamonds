const express = require('express');
const router = express.Router();
const { detail, vinilos, indumentaria, shows, edit, createVinyl, addVinyl, addShirt, createShirt } = require('../controllers/productsController');
const { detail, vinilos, indumentaria, shows, add, edit, create, update } = require('../controllers/productsController');
const { upload } = require('../middlewares/upload');

/* /products */
router
  /* ADD PARA VINILOS */
  .get('/add', addVinyl)
  .post('/add', upload.fields([
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
    .get('/add', add)
    .post('/add', upload.fields([
      {
        name: "mainImage"
      },
      {
        name: "images"
      }
    ]), create )
    .get('/detail/:id', detail)
    .get('/vinilos', vinilos)
    .get('/indumentaria', indumentaria)
    .get('/shows', shows)

    .get('/edit/:id', edit)
    .put('/update/:id', upload.fields([
      {
        name: "mainImage"
      },
      {
        name: "images"
      }
    ]),update)

module.exports = router;
