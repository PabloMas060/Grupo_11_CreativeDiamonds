const {readJSON} = require('../../data');


module.exports = (req, res) => {
    
    const shirts = readJSON('shirts.json');
    const genres = readJSON('genres.json');

    const id = req.params.id;
    const shirt = shirts.find((shirt) => shirt.id === id)
    console.log(shirt)
    return res.render('products/editShirt',{
        ...shirt,
        genres
    })
}