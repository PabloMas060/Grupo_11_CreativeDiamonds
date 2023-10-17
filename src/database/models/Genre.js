const { DataTypes } = require('sequelize');
const { sequelize } = require('../config'); 
const Album = require('./Album');


const Genre = sequelize.define('Genre', {
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

Genre.hasMany(Album);

module.exports = Genre;
