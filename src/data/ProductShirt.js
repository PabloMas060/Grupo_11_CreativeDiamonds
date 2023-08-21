const { v4: uuidv4 } = require('uuid');

const ProductShirt = function ({ title, artist, size, sleeve, color, description, price, discount, mainImage }) {

    this.id = uuidv4();
    this.title = title.trim();
    this.artist = artist.trim();
    this.color = color;
    this.size = size;
    this.sleeve = sleeve;
    this.description = description.trim();
    this.price = +price;
    this.discount = +discount;
    this.mainImage = mainImage;
}

module.exports = ProductShirt