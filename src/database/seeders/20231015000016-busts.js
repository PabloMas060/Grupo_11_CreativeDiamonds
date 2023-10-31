'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Busts', [
      {
        image: 'defaultTorso.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image: 'torso1.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image: 'torso2.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image: 'torso3.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image: 'torso4.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image: 'torso5.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Busts', null, {});
  }
};
