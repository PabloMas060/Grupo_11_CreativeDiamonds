'use strict';
/** @type {import('sequelize-cli').Migration} */

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
