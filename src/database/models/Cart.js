'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
  
    static associate(models) {
      
    }
  }
  Cart.init({
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    orderId: DataTypes.INTEGER.UNSIGNED,
    albumId: DataTypes.INTEGER.UNSIGNED,
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};