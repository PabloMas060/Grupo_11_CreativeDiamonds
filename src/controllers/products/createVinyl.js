const { readJSON, writeJSON } = require('../../data');
const ProductVinyl = require('../../data/ProductVinyl');
const {validationResult} = require('express-validator');
const {existsSync, unlinkSync} =require('fs');

module.exports = (req, res) => {
    const errors = validationResult(req);

    if(errors.isEmpty()){
        const vinyls = readJSON("vinyls.json");
        const data = {
            ...req.body,
            mainImage: req.files.mainImage ? req.files.mainImage[0].filename : null,
            images: req.files.images ? req.files.images.map(image => image.filename) : [],
            tracklist: JSON.parse(req.body.song) || []
        }
    
    /*    return res.send(data)
     */    let newVinyl = new ProductVinyl(data)
    
        vinyls.push(newVinyl);
    
        writeJSON(vinyls, 'vinyls.json');
        return res.redirect('/users/admin')
    } else {
        
        if(req.file) {
            existsSync('./public/images/' + req.file.filename) && unlinkSync('./public/images/' + req.file.filename)
        }
        const vinyls = readJSON('vinyls.json');
    const shirts = readJSON('shirts.json');
    const genres = readJSON('genres.json');
    return res.render('products/createProduct',{
        vinyls,
        genres : genres.sort ((a,b) =>
        a.name > b.name ? 1 : a.name < b.name ? -1 : 0),
        errors: errors.mapped(),
        old: req.body
    })
    }

   
}