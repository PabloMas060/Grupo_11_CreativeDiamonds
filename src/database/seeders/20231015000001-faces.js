'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Faces', [
      {
        image: 'defaultCara.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image: 'cara1.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image: 'cara2.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image: 'cara3.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image: 'cara4.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image: 'cara5.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Faces', null, {});
  }
};
