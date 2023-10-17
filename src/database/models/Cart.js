const { DataTypes } = require('sequelize');
const { sequelize } = require('../config'); 
const User = require('./User');
const Merch = require('./Merch');
const Album = require('./Album');


const Cart = sequelize.define('Cart', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  quantity: {
    type: DataTypes.INTEGER
  }
});

Cart.belongsTo(User, { foreignKey: 'userId' });
Cart.belongsTo(Merch, { foreignKey: 'merchId' });
Cart.belongsTo(Album, { foreignKey: 'albumId' });

module.exports = Cart;
