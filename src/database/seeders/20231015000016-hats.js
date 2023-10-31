'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Hats', [
      {
        image: 'defaultGorro.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image: 'gorro1.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image: 'gorro2.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image: 'gorro3.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Hats', null, {});
  }
};
