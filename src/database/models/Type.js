const { DataTypes } = require('sequelize');
const { sequelize } = require('../config');  

const Type = sequelize.define('Type', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
});

module.exports = Type;
