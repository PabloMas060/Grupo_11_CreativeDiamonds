'use strict';
/** @type {import('sequelize-cli').Migration} */

const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  date: {
    type: DataTypes.STRING(45)
  },
  total: {
    type: DataTypes.INTEGER
  }
});

Order.belongsTo(User, { foreignKey: 'userId' });
Order.belongsTo(Cart, { foreignKey: 'cartId' });

module.exports = Order;
