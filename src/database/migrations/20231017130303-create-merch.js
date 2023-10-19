'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Merchs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      discount: {
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      exclusive: {
        type: Sequelize.BOOLEAN
      },
      bandId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Bands"
          }
        }
      },
      typeId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Types"
          },
          key: 'id'
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
    await queryInterface.dropTable('Merchs');
  }
};