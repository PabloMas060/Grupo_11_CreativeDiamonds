const { DataTypes } = require('sequelize');
const { sequelize } = require('../config'); 
const User = require('./User');


const Address = sequelize.define('Address', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  address: {
    type: DataTypes.STRING(255)
  },
  country: {
    type: DataTypes.STRING(255)
  },
  city: {
    type: DataTypes.STRING(255)
  },
  province: {
    type: DataTypes.STRING(255)
  },
  zipcode: {
    type: DataTypes.INTEGER
  }
});

Address.belongsTo(User, { foreignKey: 'userId' });

module.exports = Address;