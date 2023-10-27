const checkCookie = (req, res, next) => {
    const userCookie = req.cookies.creativeDiamonds;
  
    if (userCookie) {
      req.session.user = userCookie;
    }
    next();
  };
  
  module.exports = checkCookie;
  