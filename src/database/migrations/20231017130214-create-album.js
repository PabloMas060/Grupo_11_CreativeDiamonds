'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Albums', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      discography: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.INTEGER
      },
      discount: {
        type: Sequelize.INTEGER
      },
      cantidadVendida: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
      },
      exclusive: {
        type: Sequelize.BOOLEAN,
        defaultValue : 0
      },
      bandId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Bands"
          }
        }
      },
      genreId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Genres"
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
    await queryInterface.dropTable('Albums');
  }
};