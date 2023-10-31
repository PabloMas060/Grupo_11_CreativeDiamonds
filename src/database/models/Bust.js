'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Bust extends Model {
    static associate(models) {
    }
  }
  Bust.init(
    {
      image: DataTypes.STRING, 
    },
    {
      sequelize,
      modelName: 'Bust',
    }
  );
  return Bust;
};
