const express = require('express');
const router = express.Router();
const localsCheck = require('../middlewares/localsCheck'); 
const { listArtist, detailArtist } = require('../controllers/productsController');
const { upload } = require('../middlewares/upload');
const addVynilValidator = require('../validation/addVynilValidator');
const addShirtValidator = require('../validation/addShirtValidator');

router.use(localsCheck); 

/* /products */
router
  .get('/artists', listArtist)
  .get('/artists/detail/:id?', detailArtist)
  









module.exports = router;
