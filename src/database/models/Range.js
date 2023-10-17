const { DataTypes } = require('sequelize');
const { sequelize } = require('../config'); 
const User = require('./User');


const Range = sequelize.define('Range', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(255)
  }
});

Range.hasMany(User, { foreignKey: 'rangeId' });

module.exports = Range;
