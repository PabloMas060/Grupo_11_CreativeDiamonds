const express = require('express');
const router = express.Router();
const localsCheck = require('../middlewares/localsCheck'); 
const { albumAdd, albumCreate, mercheAdd, mercheCreate, listArtist, detailArtist } = require('../controllers/productsController');
const { upload } = require('../middlewares/upload');
const addVynilValidator = require('../validation/addVynilValidator');
const addShirtValidator = require('../validation/addShirtValidator');

router.use(localsCheck); 

/* /products */
router
  .get('/albumAdd', albumAdd)
  .post('/albumAdd', upload.array('images'), productAddValidator, albumCreate)
  .get('/mercheAdd', mercheAdd)
  .post('/mercheAdd', upload.array('images'), productAddValidator, mercheCreate)
  .get('/artists', listArtist)
  .get('/artists/detail/:id?', detailArtist)
  









module.exports = router;
