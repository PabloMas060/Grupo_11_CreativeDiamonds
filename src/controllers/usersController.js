const path = require('path');
module.exports = {
    register : require('./users/register'),
    processRegister : require('./users/processRegister'),
    login : require('./users/login'),
    processLogin : require('./users/processLogin'),

    
    admin : (req,res) => {
        res.render('./admin/admin')
    },
    register : (req,res) => {
        res.render('register')
    }
}