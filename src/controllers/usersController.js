const { readJSON, writeJSON } = require('../data')
const vinyls = require('../data/vinyls.json');
const shirts = require('../data/shirts.json')


module.exports = {
    register: require('./users/register'),
    processRegister: require('./users/processRegister'),
    login: require('./users/login'),
    processLogin : require('./users/processLogin'),
    profile: require('./users/profile'),
    updateProfile: require('./users/updateProfile'),
    logout: require('./users/logout'),
    cart: require('./users/cart'),
    admin: require('./users/admin')

}