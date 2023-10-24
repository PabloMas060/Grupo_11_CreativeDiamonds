'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    static associate(models) {
      Article.belongsTo(models.Group, { foreignKey: 'groupId' });
    }
  }
  Article.init({
    title: DataTypes.STRING,
    subtitle: DataTypes.STRING,
    image: DataTypes.STRING,
    text: DataTypes.TEXT,
    favorites: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    groupId: DataTypes.INTEGER,
    nostalgia: DataTypes.BOOLEAN, 
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};
