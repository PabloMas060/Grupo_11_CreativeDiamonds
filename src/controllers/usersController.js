const path = require('path');
module.exports = {
    register : require('./users/register'),
    processRegister : require('./users/processRegister'),
    login : require('./users/login'),
    processLogin : require('./users/processLogin'),

    
    admin : require('./users/admin'),
    
    register : (req,res) => {
        res.render('register')
    }
}