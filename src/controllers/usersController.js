const { readJSON,writeJSON } = require('../data')
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
    admin : (req,res) => {
        const vinyls = readJSON('vinyls.json');
        const shirts = readJSON('shirts.json');

        return res.render('users/admin',{
            vinyls,
            shirts
        })
    }
}