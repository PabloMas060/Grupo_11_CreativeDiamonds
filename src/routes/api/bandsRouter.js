const router = require('express').Router();
const {list, detail, destroy, store, update} = require('../../controllers/api/bandApiController');
const {uploadBand} = require('../../middlewares/uploadBand');
const addBandValidator = require('../../validation/addBandValidator');
const editBandValidator = require('../../validation/editBandValidator');


//api

router
.get('/', list)
.get('/:id', detail)
.post('/', uploadBand.single('image'), addBandValidator, store)
.delete('/:id', destroy)
.patch('/:id', uploadBand.single('image'), editBandValidator, update)

module.exports = router