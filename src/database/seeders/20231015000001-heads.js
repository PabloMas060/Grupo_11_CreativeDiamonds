'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Heads', [
      {
        image: 'defaultCabeza.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image: 'cabeza1.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image: 'cabeza2.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image: 'cabeza3.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image: 'cabeza4.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image: 'cabeza5.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image: 'cabeza6.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image: 'cabeza7.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Heads', null, {});
  }
};
