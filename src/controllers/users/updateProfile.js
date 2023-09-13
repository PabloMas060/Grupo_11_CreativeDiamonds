const {existSync, unlinkSync} = require('fs')
const { readJSON, writeJSON } = require('../../data');

module.exports = (req,res) => {
    const users = readJSON("users.json")
    const id = req.params.id
    const {firstName, lastName, email }= req.body
    
    const usersModify = users.map(user =>{
        if(user.id === req.params.id){

            req.file &&
            existSync(`./public/images/${user.images}`) &&
            unlinkSync(`./public/images/${user.images}`)


            user.firstName = firstName.trim()
            user.lastName = lastName.trim()
            user.email = email
           
            user.mainImage = req.files.mainImage ? req.files.mainImage[0].filename : user.mainImage
            
            
            


        }
        return user;
    }) 
    writeJSON(usersModify,'users.json');

    return res.redirect('/')
}