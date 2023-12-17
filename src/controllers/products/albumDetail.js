const db = require('../../database/models');

module.exports = (req, res) => {
    const id = req.params.id;
    const album = db.Album.findByPk(id)
    const genres = db.Genre.findAll()
    const tracks = db.Track.findAll(
        {
            where: { albumId: id }
        }
    )
    Promise.all([album, genres, tracks])
        .then(([album, genres, tracks]) => {
            if (!album) {
                return res.send('Album no encontrado');
            }
            return res.render('albumDetail', {
                album,
                genres,
                tracks,
                id
            });
        })
        .catch(error => console.log(error));
}