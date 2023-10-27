// Importa los módulos necesarios
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const db = require('../../database/models');

module.exports = (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        const { email, password, remember } = req.body; // Asegúrate de obtener los datos correctamente

        db.User.findOne({
            where : {
                email
            }
        })
            .then(user => {
                req.session.userLogin = {
                    id : user.id,
                    name : user.name,
                    rol : user.roleId
                }
        
                remember !== undefined && res.cookie('creativeDiamonds',req.session.userLogin,{
                    maxAge : 1000 * 60
                })


        
                return res.redirect('/')
            })
            .catch(error => console.log(error))
      
    }else {
        const bands = db.Band.findAll({
            include: [
                {
                    association: 'category',
                    include: [
                        {
                            all : true
                        }
                    ]
                }
            ]
        })
        const categories = db.Category.findAll()
        Promise.all([bands,categories])
            .then(([bands,categories]) => {
                return res.render('index',{
                    bands,
                    categories
                }
                )
            })
    }
    
}