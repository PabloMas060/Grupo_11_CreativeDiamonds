const path = require('path');
module.exports = {
    admin : (req,res) => {
        res.render('admin/admin')
    },
    profile : (req,res) => {
        res.render('profile')
    },
    editProfile : (req,res) => {
        res.render('editProfile')
    },
    cart : (req,res) => {
        res.render('cart')
    },
    selfCart : (req,res) => {
        res.render('selfCart')
    },
    giftCart : (req,res) => {
        res.render('giftCart')
    },
    cardDetail : (req,res) => {
        res.render('cardDetail')
    },
    checkout : (req,res) => {
        res.render('checkout')
    },
}