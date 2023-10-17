const { DataTypes } = require('sequelize');
const { sequelize } = require('../config'); 
const Category = require('./Category');
const Artist = require('./Artist');
const Merch = require('./Merch');
const Album = require('./Album');


const Band = sequelize.define('Band', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  history: {
    type: DataTypes.TEXT
  },
  mainImage: {
    type: DataTypes.STRING(255)
  },
  dateFounded: {
    type: DataTypes.INTEGER
  },
  dateEnded: {
    type: DataTypes.STRING(30)
  },
  totalShows: {
    type: DataTypes.INTEGER
  },
  nextShows: {
    type: DataTypes.DATE
  },
  resume: {
    type: DataTypes.TEXT
  }
});

Band.belongsTo(Category, { foreignKey: 'categoryId' });
Band.hasMany(Artist);
Band.hasMany(Merch);
Band.hasMany(Album);

module.exports = Band;
