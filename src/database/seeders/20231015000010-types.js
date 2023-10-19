'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Types', [
      {
        name: 'Remera',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pantalón',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Poster',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Taza',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mochila',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sticker',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Llavero',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Indumentaria General',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Types', null, {});
  }
};
