'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Head extends Model {
    static associate(models) {

    }
  }
  Head.init(
    {
      image: DataTypes.STRING, 
    },
    {
      sequelize,
      modelName: 'Head',
    }
  );
  return Head;
};
