const express = require('express');
const router = express.Router();
const { detail, vinilos, indumentaria, shows, edit, createVinyl, addVinyl, addShirt, createShirt,remove } = require('../controllers/productsController');
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

  /*Eliminar un producto*/
  .delete('/remove/:id', remove)
  .post('/remove/:id', remove)
  .get('/remove/:id', remove)


module.exports = router;
