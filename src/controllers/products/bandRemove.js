const db = require('../../database/models');
module.exports = (req, res) => {
    db.Band.destroy({
        where: {
            id : req.params.id
        }
    }).then(() => {
        return res.redirect('/users/admin')
    })
    .catch(error => console.log(error))
}