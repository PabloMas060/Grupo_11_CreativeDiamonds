const db = require('../../database/models');

module.exports = async (req, res) => {
 

  const id = await req.params.id;
  const genres = await db.Genre.findAll();
  const bands = await db.Band.findAll();
  const album = await db.Album.findByPk(id);

return res.render('./admin/editAlbum', {
  genres,
  bands, 
  album
})
    
}