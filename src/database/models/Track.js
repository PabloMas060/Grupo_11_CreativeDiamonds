'use strict';
/** @type {import('sequelize-cli').Migration} */
const Track = sequelize.define('Track', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  length: {
    type: DataTypes.INTEGER
  }
});

Track.belongsTo(Album, { foreignKey: 'albumId' });

module.exports = Track;
