const express = require('express');
const router = express.Router();
const localsCheck = require('../middlewares/localsCheck'); 
const { albumAdd, albumCreate, mercheAdd, mercheCreate, listArtist, detailArtist } = require('../controllers/productsController');
const { upload } = require('../middlewares/upload');
const addAlbumValidator = require('../validation/addAlbumValidator');
const addMercheValidator = require('../validation/addShirtValidator');

router.use(localsCheck); 

/* /products */
router
  .get('/albumAdd', albumAdd)
  .post('/albumAdd', upload.array('images'), addAlbumValidator, albumCreate)
  .get('/mercheAdd', mercheAdd)
  .post('/mercheAdd', upload.array('images'), addMercheValidator, mercheCreate)
  .get('/artists', listArtist)
  .get('/artists/detail/:id?', detailArtist)
  .get('/addBand', addBand)
  .post('/addBand', storeBand)
  .get('/edit/band/:id?', editBand)
  .put('/edit/band/:id?', updateBand)
  .get('/addAlbum', addAlbum)
  .post('/addAlbum', storeAlbum)
  .get('/edit/album/:id?', editAlbum)
  .put('/edit/album/:id?', updateAlbum)
  .get('/addMerch', addMerch)
  .post('/addMerch', storeMerch)
  .get('/edit/merch/:id?', editMerch)
  .put('/edit/merch/:id?', updateMerch)
  
  









module.exports = router;
