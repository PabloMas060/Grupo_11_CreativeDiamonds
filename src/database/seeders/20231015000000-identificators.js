'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Identificators', [
      {
        nombre: 'hombre',
        imagen: 'icono-masculino.svg'
      },
      {
        nombre: 'mujer',
        imagen: 'icono-femenino.svg'
      },
      {
        nombre: 'no mostrar',
        imagen: 'icono-desconocido.svg'
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Identificators', null, {});
  }
};
