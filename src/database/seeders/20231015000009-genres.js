'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Genres', [
      {
        name: 'Rock',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pop',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Indie',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Metal',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Genres', null, {});
  }
};