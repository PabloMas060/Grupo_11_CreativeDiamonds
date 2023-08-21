const vinyls = require('../data/vinyls.json');
const shirts = require('../data/shirts.json')

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
    
    edit: require ('./products/edit'),
    update: require ('./products/update')


}