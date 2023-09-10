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
        // Si "Recordar Sesión" está activado, muestra un mensaje en la consola
        console.log("Sesión recordada. Usuario:", req.session.user);
        res.cookie('creativeDiamonds', req.session.user, {
          maxAge: 1000 * 60 * 60 * 24 * 7,
        });
      }

      console.log("Inicio de sesión exitoso. Usuario:", req.session.user);
      return res.redirect('/');
    } else {
      console.log("Credenciales incorrectas. Correo electrónico:", email);
      return res.render('users/login', {
        errors: {
          loginFailed: {
            msg: 'Credenciales incorrectas. Por favor, verifica tu correo y contraseña.',
          },
        },
      });
    }
  } else {
    console.log("Errores de validación:", errors.array());
    return res.render('users/login', {
      errors: errors.mapped(),
    });
  }
};
