const { readJSON, writeJSON } = require('../../data');
const ProductShirt = require('../../data/ProductShirt');

module.exports = (req, res) => {
    const shirts = readJSON("shirts.json")

    const data = {
        ...req.body,
        mainImage: req.files.mainImage ? req.files.mainImage[0].filename : null
    }

/*    return res.send(data)
 */    let newShirt = new ProductShirt(data)

    shirts.push(newShirt);

    writeJSON(shirts, 'shirts.json');
    return res.redirect('/users/admin')
}