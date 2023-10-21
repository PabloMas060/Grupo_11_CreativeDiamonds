const db = require('../../database/models');

module.exports = (req, res) => {
    const id = req.params.id;
    const album = db.Album.findByPk(id)
const genres = db.Genre.findAll()
Promise.all([album,genres])
        .then(([album, genres]) => {
        if (!album) {
            return res.send('Album no encontrado');
        }
        return res.render('albumDetail', {
        album,
        genres
        });
    })
        .catch(error => console.log(error));
}