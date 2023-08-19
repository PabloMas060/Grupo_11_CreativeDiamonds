const {v4 : uuidv4} = require('uuid');

const ProductVinyl = function({title, artist, genre, description, year, price, discount, image, format, discographic, tracklist}){

    this.id = uuidv4();
    this.title = title.trim();
    this.artist = artist.trim();
    this.genre = genre;
    this.price = +price;
    this.discount = +discount;
    this.image = image;
    this.format = format;
    this.discographic = discographic.trim();
    this.tracklist = 


}