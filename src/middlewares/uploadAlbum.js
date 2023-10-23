const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination : (req, file, callback) => {
       return callback(null , './public/images/albums')
    },
    filename : (req,file,callback) =>{
      return callback(null, `${Date.now()}_albums_${path.extname(file.originalname)}`)
    }
})

const uploadAlbum = multer({
    storage
})

module.exports = {
    uploadAlbum
}