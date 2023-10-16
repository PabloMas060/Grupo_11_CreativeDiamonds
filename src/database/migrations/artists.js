'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Artists', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      first_name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      last_name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      rol: {
        type: Sequelize.STRING
      },
      years: {
        type: Sequelize.INTEGER
      },
      bandId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Bands',
          key: 'id'
        }
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Artists');
  }
};
