'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bands', [
      { 
        name: 'Banda1',
        history: 'Historia 1',
        mainImage: 'band1.jpg',
        categoryId: 1,
        phrase: 'Frase 1',
        dateFounded: 2000,
        dateEnded: null,
        totalShows: 50,
        nextShows: '2023-01-01',
        resume: 'Resumen 1'
      },
      { 
        name: 'Banda2',
        history: 'Historia 2',
        mainImage: 'band2.jpg',
        categoryId: 2,
        phrase: 'Frase 2',
        dateFounded: 1995,
        dateEnded: '2022-12-31',
        totalShows: 70,
        nextShows: '2023-02-15',
        resume: 'Resumen 2'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bands', null, {});
  }
};