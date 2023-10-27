const path = require('path');
module.exports = {
    register : require('./users/register'), 
    processRegister : require('./users/processRegister'),
    login : require('./users/login'),
    processLogin : require('./users/processLogin'),

    profile: require('./users/profile'),
    updateProfile: require('./users/update-profile'),

    admin : require('./users/admin'),
    logout : require('./users/logout')

    
}