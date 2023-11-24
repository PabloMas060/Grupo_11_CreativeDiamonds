const db = require('../database/models')
const bcrypt = require('bcrypt');


const checkEmail = async (req,res) => {
    try {

        if(!req.query.email){
            let error = new Error("Falta el parámetro email")
            error.status = 400
            throw error
        }

        const user = await db.User.findOne({
            where : {
                email : req.query.email
            }
        })

        return res.status(200).json({
            ok : true,
            data : user ? true : false
        })
        
    } catch (error) {
        return res.status(error.status || 500).json({
            ok : false,
            msg : error.message || 'Upss, hubo un error'
        })
    }
}

const checkPassword = async (req,res) => {
    try {

        if(!req.query.password){
            let error = new Error("Falta el dato password")
            error.status = 400
            throw error
        }

        const user = await db.User.findOne({
            where : {
                email : req.body.email
            }
        })

      bcrypt.compare(req.query.password, user.password, (err,result) => {
        if (err){
            return res.status(500).json({error: 'Error al comparar las contraseñas'})
        }
        if(result){
            res.json({msg:'Contraseña correcta'})
        }else{
            res.status(401).json({error: 'Contraseña incorrecta'})
        }
      })
      
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    checkEmail,
    checkPassword
}