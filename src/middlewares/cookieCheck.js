module.exports = (req,res,next) => {
  if(req.cookies.creativeDiamonds){
      req.session.userLogin = req.cookies.creativeDiamonds
  }
  next()
}