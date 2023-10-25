const db = require('../../database/models');
module.exports = (req, res) => {

    const id = req.params.id;
    const albums = db.Album.destroy({
        where: {
            bandId: id
        }
    })
        .then(() => {
            db.Merch.destroy({
                where: {
                    bandId: id
                }
            })
                .then(() => {
                    db.Band.destroy({
                        where: {
                            id: id
                        }
                    })
                        .then(() => {
                            return res.redirect('/users/admin')
                        })
                })
        })
        .catch(error => console.log(error))

}