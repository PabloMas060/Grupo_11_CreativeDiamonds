'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Merch extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Merch.belongsTo(models.Type,{
        as: 'type',
        foreignKey: 'typeId'
      }),
      Merch.belongsTo(models.Band,{
        as: 'band',
        foreignKey: 'bandId'
      })
    }
  }
  Merch.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    explusive: DataTypes.BOOLEAN,
    bandId: DataTypes.INTEGER,
    typeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Merch',
  });
  return Merch;
};