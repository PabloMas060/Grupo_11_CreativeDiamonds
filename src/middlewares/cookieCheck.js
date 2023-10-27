module.exports = (req,res,next) => {
  if(req.cookies.craftsyForEver20){
      req.session.userLogin = req.cookies.creativeDiamonds
  }
  next()
}