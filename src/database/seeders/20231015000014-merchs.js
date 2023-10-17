'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Merchs', [
      {
        name: 'Remera1',
        price: 20,
        discount: null,
        image: 'remera1.jpg',
        bandId: 1,
        typeId: 1,
        description: 'Descripción 1',
        exclusive: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pantalon1',
        price: 15,
        discount: 10,
        image: 'pantalon1.jpg',
        bandId: 1,
        typeId: 2,
        description: 'Descripción 2',
        exclusive: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Añade más ejemplos aquí si es necesario
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Merchs', null, {});
  }
};