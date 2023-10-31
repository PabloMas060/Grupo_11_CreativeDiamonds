const db = require('../database/models');

module.exports = (req, res, next) => {
  if (req.session.userLogin) {
    res.locals.userLogin = req.session.userLogin;
    res.locals.user = req.session.userLogin;

    db.User.findByPk(req.session.userLogin.id, {
      include: [
        {
          model: db.Face, 
          as: 'face', 
        },
        {
          model: db.Head,
          as: 'head', 
        },
        {
          model: db.Bust, 
          as: 'bust',
        },
        {
          model: db.Hat,
          as: 'hat', 
        },
      ]
    })
    .then(user => {
      res.locals.user = user;
      next();
    });
  } else {
    next();
  }
};
