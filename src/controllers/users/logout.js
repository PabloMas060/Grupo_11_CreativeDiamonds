module.exports = (req, res) => {
  res.clearCookie('creativeDiamonds');
  req.session.destroy();
  return res.redirect('/');
};
