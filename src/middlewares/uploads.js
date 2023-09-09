const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination : (req, file, callback) => {
       return callback(null , './public/images/users')
    },
    filename : (req,file,callback) =>{
      return callback(null, `${Date.now()}_products_${path.extname(file.originalname)}`)
    }
})

const uploads = multer({
    storage
})

module.exports = {
    uploads
}