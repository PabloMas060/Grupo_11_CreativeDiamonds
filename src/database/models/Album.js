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
     
      Album.belongsTo(models.Genre,{
        as: 'genre',
        foreingKey: 'genreId'
      }),
      Album.belongsTo(models.Band,{
        as: 'band',
        foreingKey: 'bandId',
        onDelete : 'cascade'

      }),
      Album.belongsToMany(models.Order, {
        through: 'Cart',
        foreignKey: "albumId",
        otherKey: "orderId",
        as: "cart"
      })
    }
  }
  Album.init({
    title: DataTypes.STRING,
    discography: DataTypes.STRING,
    image: DataTypes.STRING,
    year: DataTypes.INTEGER.UNSIGNED,
    price: DataTypes.INTEGER.UNSIGNED,
    discount: DataTypes.INTEGER.UNSIGNED,
    cantidadVendida: DataTypes.INTEGER.UNSIGNED,
    description: DataTypes.TEXT,
    exclusive: DataTypes.BOOLEAN,
    bandId: DataTypes.INTEGER.UNSIGNED,
    genreId: DataTypes.INTEGER.UNSIGNED
  }, {
    sequelize,
    modelName: 'Album',
  });
  return Album;
};