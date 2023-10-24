'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    static associate(models) {
      Group.belongsTo(models.Genre, { foreignKey: 'genreId' });
      Group.hasMany(models.Article, { foreignKey: 'groupId' });
    }
  }
  Group.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    genreId: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    primaryColor: DataTypes.STRING, 
    secondaryColor: DataTypes.STRING, 
    tertiaryColor: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    followers: DataTypes.INTEGER,
    favorites: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Group',
  });

  return Group;
};
