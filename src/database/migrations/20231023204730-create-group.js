'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Groups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
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
      description: {
        type: Sequelize.TEXT,
      },
      primaryColor: {
        type: Sequelize.STRING,
        defaultValue: '#FFD700'
      },
      secondaryColor: {
        type: Sequelize.STRING,
        defaultValue: '#000000'
      },
      tertiaryColor: {
        type: Sequelize.STRING,
        defaultValue: '#800000' 
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      followers: {
        type: Sequelize.INTEGER
      },
      favorites: {
        type: Sequelize.INTEGER
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Groups');
  }
};
