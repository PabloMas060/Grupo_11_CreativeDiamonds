const { validationResult } = require('express-validator');
const db = require('../../database/models');
const { hashSync } = require('bcrypt');
//const { readJSON, writeJSON } = require('../../data/index');

module.exports = (req, res) => {
    let errors = validationResult(req);
    
    if (errors.isEmpty()) {
        const {name, surname, email, password} = req.body
            db.User.create ({
                name : name.trim(),
                surname : surname.trim(),
                email : email.trim(),
                password : hashSync(password, 10),
                rolId : 2
            })
            .then(user => {

            })
            .catch(error => console.log(error))
        //const users = readJSON('users.json');
        /*const data = {
            ...req.body,
            mainImage: req.files.mainImage ? req.files.mainImage[0].filename : null*/
        }else {
            return res.render('users/register', {
                old: req.body,
                errors: errors.mapped()
            })
        }
    }
        /*let newUser = new User(data);
        users.push(newUser);
        writeJSON(users, 'users.json');
        return res.redirect('/users/login')*/
    /*} else {
        return res.render('users/register', {
            old: req.body,
            errors: errors.mapped()
        })
    }
}*/