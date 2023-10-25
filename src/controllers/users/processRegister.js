const { validationResult } = require('express-validator');
const db = require('../../database/models');
const { hashSync } = require('bcrypt');
//const { readJSON, writeJSON } = require('../../data/index');

module.exports = (req, res) => {
    const errors = validationResult(req);

    return res.send(errors)
    
    if (errors.isEmpty()) {
        const {first_name, last_name, nick_name, email, password} = req.body
            db.User.create ({
                first_name : first_name.trim(),
                last_name : last_name.trim(),
                nick_name : nick_name.trim(),


                email : email.trim(),
                password : hashSync(password, 10),
                rolId : 2
            })
            .then(user => {
                return res.redirect('/')
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