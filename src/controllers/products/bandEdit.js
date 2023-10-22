const db = require('../../database/models');

module.exports = async (req, res) => {

    try {
        const id = req.params.id;
        const categories = await db.Category.findAll();
        const band = await db.Band.findByPk(id);
        return res.render('./admin/editBand', {
            categories,
            band  
        })
    } catch (error) {
        return console.log(error)
    }
}