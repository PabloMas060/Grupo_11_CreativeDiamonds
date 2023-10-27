module.exports = (req, res) => {
    req.session.destroy();
    res.clearCookie('creativeDiamonds'); 
    res.redirect('/');
  };
  