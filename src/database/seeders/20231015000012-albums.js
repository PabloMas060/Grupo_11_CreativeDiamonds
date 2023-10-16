'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Albums', [
      { 
        title: 'Álbum1',
        discography: 'Discografía1',
        image: 'album1.jpg',
        year: 2021,
        price: 25,
        discount: null,
        description: 'Descripción 1',
        exclusive: 1,
        bandId: 1,
        genreId: 1
      },
      { 
        title: 'Álbum2',
        discography: 'Discografía1',
        image: 'album2.jpg',
        year: 2022,
        price: 30,
        discount: 10,
        description: 'Descripción 2',
        exclusive: 0,
        bandId: 1,
        genreId: 1,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Albums', null, {});
  }
};