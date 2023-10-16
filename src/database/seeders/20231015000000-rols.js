'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Rols', [
      { name: 'admin' },
      { name: 'usuario' },
      { name: 'escritor' },
      { name: 'miembro' }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Rols', null, {});
  }
};