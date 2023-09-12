const {existSync, unlinkSync} = require('fs')
const { readJSON, writeJSON } = require('../../data');

module.exports = (req, res) => {
    return res.render('users/profile')
}