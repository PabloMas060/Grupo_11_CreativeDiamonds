'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Addresses', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      address: {
        type: Sequelize.STRING(255)
      },
      country: {
        type: Sequelize.STRING(255)
      },
      city: {
        type: Sequelize.STRING(255)
      },
      province: {
        type: Sequelize.STRING(255)
      },
      zipcode: {
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Addresses');
  }
};
