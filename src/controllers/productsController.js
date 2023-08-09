const vinyls = require('../data/vinyls.json')

module.exports = {
    detail: (req, res) => {

        const id = req.params.id;
        const vinyl = vinyls.find(vinyl => vinyl.id === +id)

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
        return res.render('products/indumentaria')
    },
    shows: (req, res) => {
        return res.render('products/shows')
    },
    add: (req, res) => {
        return res.render('products/createProduct')
    },
    edit: (req, res) => {
        return res.render('products/editProduct')
    }
}