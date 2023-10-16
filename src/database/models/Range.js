'use strict';
/** @type {import('sequelize-cli').Migration} */

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

Range.belongsTo(User, { foreignKey: 'userId' });

module.exports = Range;