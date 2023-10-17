'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      email: {
        type: Sequelize.STRING(255)
      },
      years: {
        type: Sequelize.INTEGER
      },
      avatar: {
        type: Sequelize.STRING(255)
      },
      password: {
        type: Sequelize.STRING(1000)
      },
      nick_name: {
        type: Sequelize.STRING(255)
      },
      first_name: {
        type: Sequelize.STRING(255)
      },
      last_name: {
        type: Sequelize.STRING(255)
      },
      about: {
        type: Sequelize.TEXT
      },
      state: {
        type: Sequelize.STRING(255)
      },
      addressId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Addresses',
          key: 'id'
        }
      },
      rolId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Rols',
          key: 'id'
        },
      },
      rangeId: { 
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Ranges',
          key: 'id'
        }
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};
