'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Artists', [
      {
        first_name: 'Nombre1',
        last_name: 'Apellido1',
        rol: 'Rol1',
        bandId: null,
        years: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Nombre2',
        last_name: 'Apellido2',
        rol: 'Rol2',
        bandId: null,
        years: 38,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Artists', null, {});
  }
};