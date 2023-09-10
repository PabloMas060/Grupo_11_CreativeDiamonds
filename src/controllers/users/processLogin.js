const { validationResult } = require('express-validator');
const { readJSON } = require('../../data');
const bcrypt = require('bcrypt'); 

module.exports = (req, res) => {
  const errors = validationResult(req);
  console.log("Iniciando...");
  
  if (errors.isEmpty()) {
    const users = readJSON('users.json');
    const { email, password, remember } = req.body;

    const user = users.find((user) => user.email === email);

    if (user && bcrypt.compareSync(password, user.password)) { 
      req.session.user = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        rol: user.rol,
      };

      if (remember !== undefined) {
        console.log("Sesión recordada. Usuario:", req.session.user);
        res.cookie('creativeDiamonds', req.session.user, {
          maxAge: 1000 * 60 * 60 * 24 * 7,
        });
      }

      console.log("Inicio de sesión exitoso. Usuario:", req.session.user);
      return res.redirect('/');
    }
  }

  return res.render('users/login', {
    errors: errors.array(),
  });
};