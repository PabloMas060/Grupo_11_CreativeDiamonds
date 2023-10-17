const path = require('path');
const fs = require("fs");
const { addAlbum } = require('./bands/Category'); 

module.exports = {
    fans : (req, res) => {
        return res.render('fans')
    },
    capsule : (req, res) => {
        return res.render('capsule')
    },
    listArtist: (req, res) => {

        return res.render('artists')
    },
    detailArtist: (req, res) => {
        return res.render('artistDetail')
    },
    addBand: (req, res) => {
        return res.render('./admin/addBand')
    },
    storeBand: (req, res) => {

    },
    editBand: (req, res) => {
        return res.render('./admin/editBand')
    },
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
}
