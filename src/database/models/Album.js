'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Album.hasMany(models.Track, {
        as : 'track',
        foreingKey: 'albumId'
      }),
      Album.belongsTo(models.Genre,{
        as: 'genre',
        foreingKey: 'genreId'
      }),
      Album.belongsTo(models.Band,{
        as: 'band',
        foreingKey: 'bandId'
      }),
      Album.hasMany(models.Cart, {
        as : 'cart',
        foreingKey: 'albumId'
      })
    }
  }
  Album.init({
    title: DataTypes.STRING,
    discography: DataTypes.STRING,
    image: DataTypes.STRING,
    year: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    exclusive: DataTypes.BOOLEAN,
    bandId: DataTypes.INTEGER,
    genreId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Album',
  });
  return Album;
};