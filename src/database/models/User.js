const { DataTypes } = require('sequelize');
const { sequelize } = require('../config'); 
const Address = require('./Address');
const Rol = require('./Rol');
const Range = require('./Range');



const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: DataTypes.STRING(255)
  },
  years: {
    type: DataTypes.INTEGER
  },
  avatar: {
    type: DataTypes.STRING(255)
  },
  password: {
    type: DataTypes.STRING(1000)
  },
  nick_name: {
    type: DataTypes.STRING(255)
  },
  first_name: {
    type: DataTypes.STRING(255)
  },
  last_name: {
    type: DataTypes.STRING(255)
  },
  about: {
    type: DataTypes.TEXT
  },
  state: {
    type: DataTypes.STRING(255)
  }
});

User.belongsTo(Address, { foreignKey: 'addressId' });
User.belongsTo(Rol, { foreignKey: 'rolId' });
User.belongsTo(Range, { foreignKey: 'rangeId' });
module.exports = User;