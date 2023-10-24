const db = require('../../database/models');

module.exports = async (req, res) => {
 

  const id = await req.params.id;
  const types = await db.Type.findAll();
  const bands = await db.Band.findAll();
  const merch = await db.Merch.findByPk(id);

return res.render('./admin/editMerch', {
  types,
  bands, 
  merch
})
    
}