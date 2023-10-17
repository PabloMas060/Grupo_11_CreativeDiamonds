const { DataTypes } = require('sequelize');
const { sequelize } = require('../config');  

const Rol = sequelize.define('Rol', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(255)
  }
});

module.exports = Rol;