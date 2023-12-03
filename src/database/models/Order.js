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
        as : 'cart1',
        foreignKey: 'orderId',
        through: 'Cart',
        otherKey: 'merchId'
      }),
      Order.belongsToMany(models.Album, {
        as : 'cart2',
        foreignKey: 'orderId',
        through: 'Cart',
        otherKey: 'albumId'
      })
    
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