'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Bands', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      history: {
        type: Sequelize.TEXT
      },
      mainImage: {
        type: Sequelize.STRING(255)
      },
      dateFounded: {
        type: Sequelize.INTEGER
      },
      dateEnded: {
        type: Sequelize.STRING(30)
      },
      totalShows: {
        type: Sequelize.INTEGER
      },
      nextShows: {
        type: Sequelize.DATE
      },
      resume: {
        type: Sequelize.TEXT
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Categories',
          key: 'id'
        }
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Bands');
  }
};
