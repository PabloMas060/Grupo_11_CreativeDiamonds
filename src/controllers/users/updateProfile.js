const {existSync, unlinkSync} = require('fs')
const { readJSON, writeJSON } = require('../../data');

module.exports = (req,res) => {
    const users = readJSON("users.json")
    const id = req.params.id
    const {firstName, lastName, email, mainImage}= req.body
    
    const usersModify = users.map(user =>{
        if(user.id === req.params.id){

            req.file &&
            existSync(`./public/images/${user.images}`) &&
            unlinkSync(`./public/images/${user.images}`)


            user.firstName = title.trim()
            user.lastName = artist.trim()
            user.email = +price
           
            user.mainImage = req.files.mainImage ? req.files.mainImage[0].filename : user.mainImage
            user.images = req.files.images ? req.files.images.map(image => image.filename) : user.images
            
            

console.log()
        }
        return user;
    }) 
    writeJSON(usersModify,'users.json');

    return res.redirect('/')
}