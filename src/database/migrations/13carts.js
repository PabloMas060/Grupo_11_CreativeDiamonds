'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Carts', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      merchId: {
        type: Sequelize.INTEGER,
        allowNull: true, 
        references: {
          model: 'Merchs',
          key: 'id'
        }
      },
      albumId: {
        type: Sequelize.INTEGER,
        allowNull: true, 
        references: {
          model: 'Albums',
          key: 'id'
        }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Carts');
  }
};
