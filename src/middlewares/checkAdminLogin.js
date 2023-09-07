module.exports = (req,res,next) => {
    if(req.session.adminLogin){
        next()
    }else {
        return res.redirect('/users/login')
    }
}