const express = require('express');
const router = express.Router();
const localsCheck = require('../middlewares/localsCheck'); 
const { albumAdd, albumCreate, mercheAdd, mercheCreate, listArtist, bandDetail, addBand, storeBand, editBand, updateBand, addAlbum, storeAlbum, editAlbum, updateAlbum, addMerch, storeMerch, editMerch, updateMerch,albumDetail } = require('../controllers/productsController');
const { upload } = require('../middlewares/upload');
const addAlbumValidator = require('../validation/addAlbumValidator');
const addMercheValidator = require('../validation/addMercheValidator');

router.use(localsCheck); 

/* /products */
router
  .get('/albumAdd', albumAdd)
  .post('/albumAdd', upload.single('image'), addAlbumValidator, albumCreate)
  .get('/mercheAdd', mercheAdd)
  .post('/mercheAdd', upload.single('image'), addMercheValidator, mercheCreate)
  .get('/artists', listArtist)
  .get('/artists/detail/:id', bandDetail)
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
  .get('/albums/detail/:id', albumDetail)

  
module.exports = router;
