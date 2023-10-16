'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Types', [
      { name: 'Remera' },
      { name: 'Pantalón' },
      { name: 'Poster' },
      { name: 'Taza' }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Types', null, {});
  }
};