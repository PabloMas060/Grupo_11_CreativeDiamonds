const db = require('../../database/models');

module.exports = (req, res) => {
    const id = req.params.id;
    const merch = db.Merch.findByPk(id)

        .then(merch => {
        if (!merch) {
            return res.send('Articulo no encontrado');
        }
        return res.render('merchDetail', {
      merch
        });
    })
        .catch(error => console.log(error));
}