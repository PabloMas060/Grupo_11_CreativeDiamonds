const vinyls = require('../data/vinyls.json');
const shirts = require('../data/shirts.json')
const path = require('path');
const fs = require("fs")

module.exports = {
    detail: (req, res) => {

        const id = req.params.id;
        const vinyl = vinyls.find(vinyl => vinyl.id === id)

        return res.render('products/detail',{
            vinyl
        })
    },
    vinilos: (req, res) => {
        return res.render('products/vinilos',{
            vinyls
        })
    },
    indumentaria: (req, res) => {
        return res.render('products/indumentaria',{shirts})
    },
    shows: (req, res) => {
        return res.render('products/shows')
    },
    addVinyl: require('./products/addVinyl'),
    createVinyl : require('./products/createVinyl'),
    addShirt: require('./products/addShirt'),
    createShirt : require('./products/createShirt'),
    edit: (req, res) => {
        return res.render('products/editProduct')
    }, 
    remove: (req, res) => {
        const idProducto = req.params.id;
        console.log(idProducto);
        const indexVinyl = vinyls.findIndex(product => product.id === idProducto);
        const indexShirt = shirts.findIndex(product => product.id === idProducto);
    
        if (indexVinyl !== -1) {
            const removedProduct = vinyls[indexVinyl];
            vinyls.splice(indexVinyl, 1);
    
            removeProductImagesAndWriteFile(removedProduct, vinyls, 'vinyls.json');
        } else if (indexShirt !== -1) {
            const removedProduct = shirts[indexShirt];
            shirts.splice(indexShirt, 1);
    
            removeProductImagesAndWriteFile(removedProduct, shirts, 'shirts.json');
        } else {
            console.log('Producto no encontrado en el array.');
            res.status(404).send('Producto no encontrado');
            return;
        }
    
        res.redirect('/users/admin');
    
        function removeProductImagesAndWriteFile(product, productsArray, fileName) {
            const imagesToDelete = [product.mainImage, ...(product.images || [])];
        
            imagesToDelete.forEach(image => {
                const imagePath = path.resolve(__dirname, '..', '..', 'public', 'images', image);
                fs.unlink(imagePath, err => {
                    if (err) {
                        console.error('Error deleting image:', err);
                    } else {
                        console.log('Image deleted successfully');
                    }
                });
            });
        
            fs.writeFile(path.resolve(__dirname, '..', 'data', fileName), JSON.stringify(productsArray, null, 2), err => {
                if (err) {
                    console.error('Error al escribir en el archivo:', err);
                } else {
                    console.log('Archivo actualizado exitosamente.');
                }
            });
        }
    }

}