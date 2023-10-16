'use strict';
/** @type {import('sequelize-cli').Migration} */

const Category = sequelize.define('Category', {
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

module.exports = Category;
