'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bands', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      history: {
        type: Sequelize.TEXT
      },
      mainImage: {
        type: Sequelize.STRING
      },
      dateFounded: {
        type: Sequelize.INTEGER
      },
      dateEnded: {
        type: Sequelize.INTEGER
      },
      totalShows: {
        type: Sequelize.INTEGER
      },
      nextShow: {
        type: Sequelize.INTEGER
      },
      resume: {
        type: Sequelize.TEXT
      },
      phrase: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('bands');
  }
};