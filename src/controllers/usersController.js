const { readJSON, writeJSON } = require('../data')
const vinyls = require('../data/vinyls.json');
const shirts = require('../data/shirts.json')


module.exports = {
    register: (req, res) => {
        return res.render('users/register')
    },
    login: (req, res) => {
        return res.render('users/login')
    },
    profile: (req, res) => {
        return res.render('users/profile')
    },
    cart: (req, res) => {
        return res.render('users/cart')
    },
    admin: (req, res) => {
        const vinyls = readJSON('vinyls.json');
        const shirts = readJSON('shirts.json');

        const { keyword } = req.body
        const {typeSearch} = req.params


        const searchVinyls = vinyls.filter(vinyl => vinyl.title.toLowerCase().includes(keyword) || vinyl.artist.toLowerCase().includes(keyword))
        const searchShirts = shirts.filter(shirt => shirt.title.toLowerCase().includes(keyword) || shirt.artist.toLowerCase().includes(keyword))


        return res.render('users/admin', {
            vinyls,
            shirts,
            searchVinyls,
            searchShirts,
            keyword,
            typeSearch
        })
    }
}