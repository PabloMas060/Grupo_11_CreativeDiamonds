'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Carts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      orderId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Orders"
          },
          key : 'id'
        }
      },
      albumId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Albums'
          },
          key : 'id'
        },
        allowNull: false
      },
      merchId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Merchs'
          },
          key : 'id'
        },
        allowNull: false
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
    await queryInterface.dropTable('Carts');
  }
};