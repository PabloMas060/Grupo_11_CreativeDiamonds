const db = require('../../database/models');

module.exports = (req, res) => {

    const id = req.params.id;
    db.Merch.destroy({
        where : {
            id : id
        }
    })
    .then(() => {
        res.redirect('/users/admin')
    })
    .catch(error => console.log(error))
}
