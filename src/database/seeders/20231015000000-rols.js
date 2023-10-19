'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Rols', [
      {
        name: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'usuario',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'escritor',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'miembro',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Rols', null, {});
  }
};