const {v4 : uuidv4} = require('uuid');

const ProductVinyl = function({title, artist, genre, description, year, price, discount, mainImage, images, format, discographic, tracklist}){

    this.id = uuidv4();
    this.title = title.trim();
    this.artist = artist.trim();
    this.genre = genre;
    this.description = description.trim();
    this.year = +year;
    this.price = +price;
    this.discount = +discount;
    this.mainImage = mainImage;
    this.images = images;
    this.format = format;
    this.discographic = discographic.trim();
    this.tracklist = tracklist.map(song => song.trim());

}

module.exports = ProductVinyl