'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Hat extends Model {
    static associate(models) {

    }
  }
  Hat.init(
    {
      image: DataTypes.STRING, 
    },
    {
      sequelize,
      modelName: 'Hat',
    }
  );
  return Hat;
};
