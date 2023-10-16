'use strict';
/** @type {import('sequelize-cli').Migration} */

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
