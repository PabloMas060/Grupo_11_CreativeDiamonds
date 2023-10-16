'use strict';
/** @type {import('sequelize-cli').Migration} */

const Album = sequelize.define('Album', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  discography: {
    type: DataTypes.STRING(255)
  },
  image: {
    type: DataTypes.STRING(255)
  },
  year: {
    type: DataTypes.INTEGER
  },
  price: {
    type: DataTypes.INTEGER
  },
  discount: {
    type: DataTypes.INTEGER
  },
  description: {
    type: DataTypes.TEXT
  },
  exclusive: {
    type: DataTypes.BOOLEAN
  }
});

Album.belongsTo(Band, { foreignKey: 'bandId' });
Album.belongsTo(Genre, { foreignKey: 'genreId' });

module.exports = Album;
