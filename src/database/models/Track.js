'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Track extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Track.belongsTo(models.Album,{
        as: 'album',
        foreignKey: 'albumId'
      })
    }
  }
  Track.init({
    name: DataTypes.STRING,
    length: DataTypes.INTEGER,
    albumId: DataTypes.INTEGER.UNSIGNED
  }, {
    sequelize,
    modelName: 'Track',
  });
  return Track;
};