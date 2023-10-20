'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bands', {
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
      image: {
        type: Sequelize.STRING
      },
      dateFounded: {
        type: Sequelize.STRING
      },
      dateEnded: {
        type: Sequelize.STRING,
        allowNull: true
      },
      totalShows: {
        type: Sequelize.INTEGER
      },
      nextShows: {
        type: Sequelize.STRING
      },
      resume: {
        type: Sequelize.TEXT
      },
      phrase: {
        type: Sequelize.STRING
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Categories"
          }
        }
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
    await queryInterface.dropTable('Bands');
  }
};