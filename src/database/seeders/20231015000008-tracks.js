module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Tracks', [
        { name: 'Canción1', length: 240, albumId: 1 },
        { name: 'Canción2', length: 180, albumId: 1 },
      ], {});
    },
  
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Tracks', null, {});
    }
  };