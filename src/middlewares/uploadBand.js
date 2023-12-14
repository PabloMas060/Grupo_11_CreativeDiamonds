const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        return callback(null, './public/images/bands');
    },
    filename: (req, file, callback) => {
        return callback(null, `${Date.now()}_bands_${path.extname(file.originalname)}`);
    }
});

const uploadBand = multer({
    storage,
    fileFilter: (req, file, callback) => {
        if (file.mimetype.startsWith('image/')) {
            return callback(null, true);
        } else {
            return callback(new Error('Tipo de archivo no permitido.'));
        }
    }
});

module.exports = {
    uploadBand
};