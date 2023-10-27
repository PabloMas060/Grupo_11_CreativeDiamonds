const {readJSON} = require('../../data');


module.exports = (req, res) => {
    const vinyls = readJSON("vinyls.json");
    
    const genres = readJSON('genres.json');

    const id = req.params.id;
    const vinyl = vinyls.find((vinyl) => vinyl.id === id)
    console.log(vinyl)
    return res.render('products/editProduct',{
        ...vinyl,
        genres
    })
}