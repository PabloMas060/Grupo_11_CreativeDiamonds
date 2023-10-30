'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ''
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ''
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ''
      },
      province: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ''
      },
      zipcode: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Addresses');
  }
};