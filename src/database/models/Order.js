'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User, {
        as : 'user',
        foreignKey: 'userId'
      }),
      Order.belongsToMany(models.Merch, {
        as : 'cart',
        foreignKey: 'orderId',
        through: 'Cart',
        otherKey: 'merchId'
      }),
      Order.belongsToMany(models.Album, {
        as : 'cart',
        foreignKey: 'orderId',
        through: 'Cart',
        otherKey: 'albumId'
      })
    
    }
  }
  Order.init({
    date: DataTypes.STRING,
    total: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    merchId: DataTypes.INTEGER,
    albumId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};