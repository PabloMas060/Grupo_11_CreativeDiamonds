const vinyls = require('../data/vinyls.json')


module.exports = {
    index : (req,res) => {
        return res.render('index',{
            vinyls,
            offerVinyls : vinyls.filter(vinyl => vinyl.discount > 0)
        })
    }
}