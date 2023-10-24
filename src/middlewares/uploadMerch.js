const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination : (req, file, callback) => {
       return callback(null , './public/images/merch')
    },
    filename : (req,file,callback) =>{
      return callback(null, `${Date.now()}_merchs_${path.extname(file.originalname)}`)
    }
})

const uploadMerch = multer({
    storage
})

module.exports = {
    uploadMerch
}