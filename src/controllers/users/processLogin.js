const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const db = require('../../database/models');

module.exports = (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
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
                return  res.render("index", {
                    title: "Inicio de sesión",
                    errors: errors.mapped(),
                    old: req.body,
                    bands,
                    categories
                })
            }).catch(error => console.log(error))
     
    }
    const { email, password, remember } = req.body;
    db.User.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(user => {
            req.session.userLogin = {
                id: user.id,
                firts_name: user.firts_name,
                last_name: user.last_name,
                rolId: user.rolId
            }

            remember !== undefined && res.cookie('creativeDiamonds',req.session.userLogin,{
                maxAge : 1000 * 60
            })


            return res.redirect('/')
        })
        .catch(error => console.log(error))

  
}