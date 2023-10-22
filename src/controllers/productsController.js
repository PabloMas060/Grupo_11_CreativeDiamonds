const vinyls = require('../data/vinyls.json');
const shirts = require('../data/shirts.json');
const path = require('path');
const fs = require("fs");
const db = require('../database/models');

module.exports = {
bandDetail: require('./products/bandDetail'),
albumAdd: require('./products/albumAdd'),
albumCreate: require('./products/albumCreate'),
mercheAdd: require('./products/mercheAdd'),
mercheCreate: require('./products/mercheCreate'),
    listArtists: require('./products/listArtists'),
    
    addBand: (req, res) => {
        return res.render('./admin/addBand')
    },
    storeBand: (req, res) => {

    },
    editBand: require('./products/bandEdit'),
    updateBand: (req, res) => {

    },
    addAlbum: (req, res) => {
        return res.render('./admin/addAlbum')
    },
    storeAlbum: (req, res) => {

    },
    editAlbum: (req, res) => {
        return res.render('./admin/editAlbum')
    },
    updateAlbum: (req, res) => {

    },
    addMerch: (req, res) => {
        return res.render('./admin/addMerch')
    },
    storeMerch: (req, res) => {

    },
    editMerch: (req, res) => {
        return res.render('./admin/editMerch')
    },
    updateMerch: (req, res) => {

    },
    albumDetail: require('./products/albumDetail'),
    merchDetail: require('./products/merchDetail')

}
