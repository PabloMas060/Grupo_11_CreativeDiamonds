'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Ranges', [
      {
        name: 'rango1',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      { name: 'rango2',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      // no se que es rango amigo dejame en paz
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Ranges', null, {});
  }
};