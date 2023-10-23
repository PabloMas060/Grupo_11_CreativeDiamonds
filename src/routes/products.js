const express = require('express');
const router = express.Router();
const localsCheck = require('../middlewares/localsCheck'); 
const { albumAdd, albumCreate, mercheAdd, mercheCreate, listArtists, bandDetail, bandAdd, bandCreate, editBand, updateBand, addAlbum, storeAlbum, editAlbum, updateAlbum, addMerch, storeMerch, editMerch, updateMerch,albumDetail, merchDetail } = require('../controllers/productsController');
const { upload } = require('../middlewares/upload');
const addAlbumValidator = require('../validation/addAlbumValidator');
const addMercheValidator = require('../validation/addMercheValidator');
const addBandValidator = require('../validation/addBandValidator');
const { uploadBand } = require('../middlewares/uploadBand');
const { uploadAlbum } = require('../middlewares/uploadAlbum');


router.use(localsCheck); 

/* /products */
router
  .get('/albumAdd', albumAdd)
  .post('/albumAdd', upload.single('image'), addAlbumValidator, albumCreate)
  .get('/mercheAdd', mercheAdd)
  .post('/mercheAdd', upload.single('image'), addMercheValidator, mercheCreate)
  .get('/artists', listArtists)
  .get('/artists/detail/:id', bandDetail)
  .get('/addBand', bandAdd)
  .post('/addBand', upload.fields([
    {
      name: "mainImage",
    },
    {
      name: "images",
    }
  ]),addBandValidator, bandCreate)
  .get('/edit/band/:id', editBand)
  .put('/edit/band/:id',/* uploadBand.fields([
    {
      name: "mainImage",
    },
    {
      name: "images",
    }
  ]) */
  addBandValidator, updateBand)
  .get('/addAlbum', addAlbum)
  .post('/addAlbum', storeAlbum)
  .get('/edit/album/:id', editAlbum)
  .put('/edit/album/:id', uploadAlbum.single('image'), addAlbumValidator ,updateAlbum)
  .get('/addMerch', addMerch)
  .post('/addMerch', storeMerch)
  .get('/edit/merch/:id?', editMerch)
  .put('/edit/merch/:id?', updateMerch)
  .get('/albums/detail/:id', albumDetail)
  .get('/merchs/detail/:id', merchDetail)

  
module.exports = router;
