const {readJSON} = require('../../data');

module.exports = (req,res) =>{
    const vinyls = readJSON('vinyls.json');
    const shirts = readJSON('shirts.json');
    const genres = readJSON('genres.json');
    return res.render('products/createProduct',{
        vinyls,
        genres : genres.sort ((a,b) =>
        a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
    })
}