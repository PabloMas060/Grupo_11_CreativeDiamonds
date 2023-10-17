const { DataTypes } = require('sequelize');
const { sequelize } = require('../config');
const Band = require('./Band');


const Artist = sequelize.define('Artist', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  first_name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  rol: {
    type: DataTypes.STRING
  },
  years: {
    type: DataTypes.INTEGER
  }
});

Artist.belongsTo(Band, { foreignKey: 'bandId' });

module.exports = Artist;
