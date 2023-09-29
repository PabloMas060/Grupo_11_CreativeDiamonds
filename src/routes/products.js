const express = require('express');
const router = express.Router();
const localsCheck = require('../middlewares/localsCheck'); 
const { detail, vinilos, indumentaria, shows, edit, createVinyl, addVinyl, addShirt, createShirt, update, detailShirt, remove, editShirts, updateShirts } = require('../controllers/productsController');
const { upload } = require('../middlewares/upload');
const addVynilValidator = require('../validation/addVynilValidator');
const addShirtValidator = require('../validation/addShirtValidator');

router.use(localsCheck); 

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
  ]), addVynilValidator, createVinyl)
  /* ADD PARA SHIRTS */
  .get('/addShirt', addShirt)
  .post('/addShirt', upload.fields([
    {
      name: "mainImage"
    }
  ]), addShirtValidator, createShirt)

  .get('/detail/:id', detail)
  .get('/vinilos', vinilos)
  .get('/indumentaria', indumentaria)
  .get('/shows', shows)

  

/*Edit y Update Vinilos*/
  .get('/edit/:id', edit)
  .put('/update/:id', upload.fields([
    {
      name: "mainImage"
    },
    {
      name: "images"
    }
  ]), update)

  /*Edit y Update Shirts*/
  .get('/editShirts/:id', editShirts) 
  .put('/updateShirts/:id', upload.fields([
    {
      name: "mainImage"
    }
  ]), updateShirts)





/*Eliminar un producto*/
  .delete('/remove/:id', remove)
  .post('/remove/:id', remove)
  .get('/remove/:id', remove)

  .get('/detail-shirt/:id', detailShirt);
module.exports = router;
