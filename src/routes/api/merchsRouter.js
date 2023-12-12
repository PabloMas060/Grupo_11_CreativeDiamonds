const router = require('express').Router();
const {list, detail, destroy, store, update, exclusive} = require('../../controllers/api/merchApiController');
const {uploadMerch} = require('../../middlewares/uploadMerch');
const addMercheValidator = require('../../validation/addMercheValidator');
const editMercheValidator = require('../../validation/editMercheValidator');


//api

router
.get('/', list)
.get('/exclusive', exclusive)
.get('/:id', detail)
.post('/', uploadMerch.single('image'), addMercheValidator, store)

.delete('/:id', destroy)
.patch('/:id', uploadMerch.single('image'), editMercheValidator, update)

module.exports = router