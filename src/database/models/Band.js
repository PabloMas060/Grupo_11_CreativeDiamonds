'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Band extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Band.belongsTo(models.Category, {
        as: 'category',
        foreignKey: 'categoryId'
      });
      Band.hasMany(models.Album,{
        as: 'album',
        foreignKey: 'bandId'
      })
    }
  }
  Band.init({
    name: DataTypes.STRING,
    history: DataTypes.TEXT,
    mainImage: DataTypes.STRING,
    dateFounded: DataTypes.STRING,
    dateEnded: DataTypes.STRING,
    totalShows: DataTypes.INTEGER.UNSIGNED,
    nextShows: DataTypes.STRING,
    resume: DataTypes.TEXT,
    phrase: DataTypes.STRING,
    categoryId: DataTypes.INTEGER.UNSIGNED
  }, {
    sequelize,
    modelName: 'Band',
  });
  return Band;
};