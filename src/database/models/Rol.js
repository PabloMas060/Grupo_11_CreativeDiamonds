'use strict';
/** @type {import('sequelize-cli').Migration} */

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