module.exports = {
    index: (req, res) => {
        res.render('index'); 
    },
    about: (req, res) => {
        res.render('about')
    },
    contact: (req, res) => {
        res.render('contact')
    },
    groups: (req, res) => {
        res.render('groups')
    },
    profile: (req, res) => {
        res.render('profile')
    },
    editProfile: (req, res) => {
        res.render('editProfile')
    },
    notices: (req, res) => {
        res.render('notices')
    },
    notice: (req, res) => {
        res.render('notice')
    },
    cart: (req, res) => {
        res.render('cart')
    },
    selfcart: (req, res) => {
        res.render('selfcart')
    },
    giftcart: (req, res) => {
        res.render('giftcart')
    },
    cardInfo: (req, res) => {
        res.render('cardInfo')
    },
    checkout: (req, res) => {
        res.render('checkout')
    },
    fans: (req, res) => {
        res.render('fans')
    },
    capsule: (req, res) => {
        res.render('capsule')
    },

}