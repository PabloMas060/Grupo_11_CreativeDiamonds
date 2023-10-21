'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Artist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Artist.belongsTo(models.Band, {
        as: 'band',
        foreignKey: 'bandId'
      })
    }
  }
  Artist.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    rol: DataTypes.STRING,
    years: DataTypes.INTEGER.UNSIGNED,
    bandId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Artist',
  });
  return Artist;
};