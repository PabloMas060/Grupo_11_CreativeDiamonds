
const bcrypt = require('bcrypt'); 

const {validationResult} = require('express-validator');
const db = require('../../database/models');



module.exports = (req,res) => {

    const errors = validationResult(req);
    

    if(errors.isEmpty()){
        const {email, remember} = req.body
        db.User.findOne({
            where : {
                email, 
            }

        })
        .then(user => {
            req.session.user = {
                id : user.id,
                name : user.id,
                rol : user.rolId
            }
    
          

                remember !== undefined && res.cookie
              ('creativeDiamonds', req.session.user, {
          maxAge: 1000 * 60
        });
      
    
            return res.redirect('/')

        })
        .catch(error => console.log(error)) 

      }else{
        return res.render('users/login', {
          errors: errors.mapped(),
        });
      }
    
    }
//------------------------
