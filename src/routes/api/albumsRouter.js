const router = require('express').Router();
const {list, detail, destroy, store, update, exclusive} = require('../../controllers/api/albumApiController');
const {uploadAlbum} = require('../../middlewares/uploadAlbum');
const addAlbumValidator = require('../../validation/addAlbumValidator');
const editAlbumValidator = require('../../validation/editAlbumValidator');


//api

router
.get('/', list)
.get('/exclusive', exclusive)
.get('/:id', detail)
.post('/', uploadAlbum.single('image'), addAlbumValidator, store)

.delete('/:id', destroy)
.patch('/albums', uploadAlbum.single('image'), editAlbumValidator, update)

module.exports = router