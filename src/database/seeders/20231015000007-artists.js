'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Artists', [
      { 
        first_name: 'Nombre1',
        last_name: 'Apellido1',
        rol: 'Rol1',
        bandId: 1,
        years: 20
      },
      { 
        first_name: 'Nombre2',
        last_name: 'Apellido2',
        rol: 'Rol2',
        bandId: 1,
        years: 38
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Artists', null, {});
  }
};