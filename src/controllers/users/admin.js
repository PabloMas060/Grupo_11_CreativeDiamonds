const { readJSON } = require('../../data/index')
const db = require('../../database/models')

module.exports = (req, res) => {

  const { keyword } = req.body;
  const { typeSearch } = req.params;

  const bands = db.Band.findAll()
  const albums = db.Album.findAll()
  const merchs = db.Merch.findAll()

  Promise.all([bands, albums, merchs])
    .then(([bands, albums, merchs]) => {
      return res.render('./admin/admin', {
        bands,
        albums,
        merchs
      })
    })
    .catch(error => console.log(error))

  /*  const vinyls = readJSON('vinyls.json');
   const shirts = readJSON('shirts.json');
   
   let searchVinyls = [];
   let searchShirts = [];
   let keywordLowerCase = '';
   
   if (keyword) {
     keywordLowerCase = keyword.trim().toLowerCase();
     searchVinyls = vinyls.filter(vinyl =>
       vinyl.title.toLowerCase().includes(keywordLowerCase) || vinyl.artist.toLowerCase().includes(keywordLowerCase)
     );
   
     searchShirts = shirts.filter(shirt =>
       shirt.title.toLowerCase().includes(keywordLowerCase) || shirt.artist.toLowerCase().includes(keywordLowerCase)
     );
   }
   
   return res.render('users/admin', {
     vinyls,
     shirts,
     searchVinyls,
     searchShirts,
     keyword,
     typeSearch
   }); */


}