const { validationResult } = require('express-validator');
const User = require('../../data/User');
const { readJSON, writeJSON } = require('../../data/index');

module.exports = (req, res) => {
    let errors = validationResult(req);
    
    if (errors.isEmpty()) {
        const users = readJSON('users.json');

        const data = {
            ...req.body,
            mainImage: req.files.mainImage ? req.files.mainImage[0].filename : null
        }
  
        let newUser = new User(data);
        users.push(newUser);
        writeJSON(users, 'users.json');
        return res.redirect('/users/login')
    } else {
        return res.render('users/register', {
            old: req.body,
            errors: errors.mapped()
        })
    }
}