// Importa los módulos necesarios
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const db = require('../../database/models');

module.exports = (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        const { emailNickname, contrasena, recordarme } = req.body; // Asegúrate de obtener los datos correctamente

        // Realiza una búsqueda condicional por email o nickname
        db.User.findOne({
            where: {
                [db.Sequelize.or]: [
                    { email: emailNickname },
                    { nick_name: emailNickname }
                ]
            }
        })
        .then(user => {
            if (user) {
                // Imprime la información que está enviando el usuario
                console.log('Información del usuario que intenta iniciar sesión:', user);

                // Verifica la contraseña
                bcrypt.compare(contrasena, user.password, (err, result) => {
                    if (result) {
                        // Si la contraseña es correcta, crea la sesión de usuario
                        req.session.user = {
                            id: user.id,
                            name: user.first_name, // Cambia esto a la propiedad correcta que almacena el nombre del usuario
                            rol: user.rolId
                        }

                        // Si se seleccionó "Recordarme", establece una cookie
                        if (recordarme) {
                            res.cookie('creativeDiamonds', req.session.user, {
                                maxAge: 1000 * 60
                            });
                        }

                        // Redirige a la página actual para refrescar el contenido
                        return res.redirect(req.get('referer'));
                    } else {
                        // La contraseña es incorrecta, puedes manejar esto de manera adecuada
                        return res.render('login', { error: 'Contraseña incorrecta' });
                    }
                });
            } else {
                // El usuario no existe, puedes manejar esto de manera adecuada
                return res.render('login', { error: 'Usuario no encontrado' });
            }
        })
        .catch(error => console.log(error));
    } else {
        return res.render('login', {
            errors: errors.array(),
        });
    }
}
