const vinyls = require('../data/vinyls.json');
const shirts = require('../data/shirts.json');
const filtroController = require('./filtroController'); 
const path = require('path');
const fs = require("fs");

module.exports = {
    listArtist: (req, res) => {

        return res.render('artists')
    }
}
