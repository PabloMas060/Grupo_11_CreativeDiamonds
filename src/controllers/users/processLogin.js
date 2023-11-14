// Importa los módulos necesarios
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const db = require('../../database/models');

module.exports = (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.render("partials/modalLogin.ejs", {
            title: "Inicio de sesión",
            errors: errors.mapped(),
            old: req.body,
          });
        }

        db.User.findOne({
            where : {
                email: req.body.email
            }
        })
            .then(user=> {
                req.session.userLogin = {
                    id: user.id,
                    firts_name: user.firts_name,
                    last_name: user.last_name,
                    rolId : user.rolId 
                }
        
                if (req.body.remember) {
                    res.cookie("creativeDiamonds", req.session.userLogin, {
                      maxAge: 1000 * 60 * 5,
                    });
                  }

        
                return res.redirect('/')
            })
            .catch(error => console.log(error))
      
   /*  }else {
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
       
    }
    const categories = db.Category.findAll()
    Promise.all([bands,categories])
        .then(([bands,categories]) => {
            return res.render('index',{
                bands,
                categories
            }
            )
        }) */
}