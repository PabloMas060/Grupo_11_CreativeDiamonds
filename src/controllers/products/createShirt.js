const { readJSON, writeJSON } = require('../../data');
const ProductShirt = require('../../data/ProductShirt');
const {validationResult} = require('express-validator');
const {existsSync, unlinkSync} =require('fs');

module.exports = (req, res) => {

    const errors = validationResult(req);

    if(errors.isEmpty()) {
        const shirts = readJSON("shirts.json")

        const data = {
            ...req.body,
            mainImage: req.files.mainImage ? req.files.mainImage[0].filename : null
        }
    
    /*    return res.send(data)
     */    let newShirt = new ProductShirt(data)
    
        shirts.push(newShirt);
    
        writeJSON(shirts, 'shirts.json');
        return res.redirect('/users/admin')
    } else {

        if(req.file) {
            existsSync('./public/images/' + req.file.filename) && unlinkSync('./public/images/' + req.file.filename)
        }
        const vinyls = readJSON('vinyls.json');
        const shirts = readJSON('shirts.json');
        const genres = readJSON('genres.json');
        return res.render('products/createProductShirts',{
            shirts,
            genres : genres.sort ((a,b) =>
            a.name > b.name ? 1 : a.name < b.name ? -1 : 0),
            errors : errors.mapped(),
            old: req.body
        })
    }

    
}