'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
  
    static associate(models) {
      Order.belongsTo(models.User, {
        as: 'user',
        foreignKey: 'userId',  // Clave foránea en la tabla intermedia que apunta a Order
      })
    
      Order.belongsToMany(models.Album, {
        through: 'Cart',
        foreignKey: 'orderId',
        otherKey: 'albumId',
        as: 'cart'
      });
    } 
  
}
  Order.init({
    date: { type: DataTypes.DATE, defaultValue: new Date() },
    total: { type: DataTypes.INTEGER, defaultValue: 0 },
    userId: DataTypes.INTEGER,
    status: {
      type: DataTypes.STRING,
      defaultValue: "pending",
      validate: {
        isIn: {
          args: [["pending", "completed", "canceled"]],
          msg: 'Los valores válidos son ["pending", "completed" , "canceled"]'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};