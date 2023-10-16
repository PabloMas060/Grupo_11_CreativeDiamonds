'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Ranges', [
      { name: 'rango1', userId: 1 },
      { name: 'rango2', userId: 2 },
      // no se que es rango amigo dejame en paz
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Ranges', null, {});
  }
};