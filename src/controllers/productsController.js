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
    add: require('./products/add'),
    create : require('./products/create'),
    edit: (req, res) => {
        return res.render('products/editProduct')
    },

}