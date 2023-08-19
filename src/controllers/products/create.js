const { readJSON, writeJSON } = require('../../data');
const ProductVinyl = require('../../data/ProductVinyl');

module.exports = (req, res) => {
    const vinyls = readJSON("vinyls.json")

    const data = {
        ...req.body,
        mainImage: req.files.mainImage ? req.files.mainImage[0].filename : null,
        images: req.files.images ? req.files.images.map(image => image.filename) : [],
        tracklist: JSON.parse(req.body.song) || []
    }

/*    return res.send(data)
 */    let newVinyl = new ProductVinyl(data)

    vinyls.push(newVinyl);

    writeJSON(vinyls, 'vinyls.json');
    return res.redirect('/users/admin')
}