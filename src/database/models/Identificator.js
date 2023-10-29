'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Identificator extends Model {
    static associate(models) {
      Identificator.hasMany(models.User, { foreignKey: 'identificatorId' });
    }
  }
  Identificator.init({
    nombre: DataTypes.STRING,
    imagen: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Identificator',
  });
  return Identificator;
};
