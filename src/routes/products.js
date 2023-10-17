const express = require('express');
const router = express.Router();
const localsCheck = require('../middlewares/localsCheck'); 
const { fans, capsule, listArtist, detailArtist, addBand, storeBand, editBand, updateBand, addAlbum, storeAlbum, editAlbum, updateAlbum, addMerch, storeMerch, editMerch, updateMerch } = require('../controllers/productsController');
const { upload } = require('../middlewares/upload');
const addVynilValidator = require('../validation/addVynilValidator');
const addShirtValidator = require('../validation/addShirtValidator');

router.use(localsCheck); 

/* /products */
router
  .get('/fans', fans)
  .get('/capsule', capsule)
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
