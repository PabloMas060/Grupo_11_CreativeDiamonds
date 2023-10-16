const vinyls = require('../data/vinyls.json');
const shirts = require('../data/shirts.json');
const path = require('path');
const fs = require("fs");

module.exports = {

albumAdd: require('./products/albumAdd'),
albumCreate: require('./products/albumCreate'),
mercheAdd: require('./products/mercheAdd'),
mercheCreate: require('./products/mercheCreate'),
    listArtist: (req, res) => {

        return res.render('artists')
    },
    detailArtist: (req, res) => {
        return res.render('artistDetail')
    }
}
