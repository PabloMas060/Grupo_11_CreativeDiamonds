const {existSync, unlinkSync} = require('fs')
const { readJSON, writeJSON } = require('../../data');

module.exports = (req,res) => {
    const shirts = readJSON("shirts.json")
    const id = req.params.id
    const {title, artist,price,discount, size ,sleeve,color,description,}= req.body
    
    const shirtsModify = shirts.map(shirt =>{
        if(shirt.id === req.params.id){

            req.file &&
            existSync(`./public/images/${shirt.images}`) &&
            unlinkSync(`./public/images/${shirt.images}`)


            shirt.title = title.trim()
            shirt.artist = artist.trim()
            shirt.price = +price
            shirt.discount = +discount
            shirt.size = size
            shirt.sleeve = sleeve
            shirt.color = color
            shirt.description = description.trim()
            shirt.mainImage =  shirt.mainImage = req.files.mainImage ? req.files.mainImage[0].filename : null
            
            
            


        }
        return shirt;
    }) 
    writeJSON(shirtsModify,'shirts.json');

    return res.redirect('/users/admin')
}