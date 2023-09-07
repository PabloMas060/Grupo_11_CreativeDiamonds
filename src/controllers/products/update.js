const {existSync, unlinkSync} = require('fs')
const { readJSON, writeJSON } = require('../../data');

module.exports = (req,res) => {
    const vinyls = readJSON("vinyls.json")
    const id = req.params.id
    const {title, artist,price,discount, format,discographic,genre,year,description,}= req.body
    
    const vinylsModify = vinyls.map(vinyl =>{
        if(vinyl.id === req.params.id){

            req.file &&
            existSync(`./public/images/${vinyl.images}`) &&
            unlinkSync(`./public/images/${vinyl.images}`)


            vinyl.title = title.trim()
            vinyl.artist = artist.trim()
            vinyl.price = +price
            vinyl.discount = +discount
            vinyl.format = format
            vinyl.discographic = discographic.trim()
            vinyl.genre = genre
            vinyl.year = +year
            vinyl.description = description.trim()
            vinyl.mainImage = req.files.mainImage ? req.files.mainImage[0].filename : vinyl.mainImage
            vinyl.images = req.files.images ? req.files.images.map(image => image.filename) : vinyl.images
            
            


        }
        return vinyl;
    }) 
    writeJSON(vinylsModify,'vinyls.json');

    return res.redirect('/users/admin')
}