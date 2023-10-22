const db = require('../../database/models');

module.exports = (req, res) => {
    const id = req.params.id
    const categories = db.Category.findAll()
    const band = db.Band.findByPk(id)

    Promise.all([categories,band])
        .then(([categories,band]) => {
            res.render('./admin/editBand',{
                categories,
                band
            })
        })
        .catch(error => console.log(error))
}