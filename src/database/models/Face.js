'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Face extends Model {
    static associate(models) {
    }
  }
  Face.init(
    {
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Face',
    }
  );
  return Face;
};
