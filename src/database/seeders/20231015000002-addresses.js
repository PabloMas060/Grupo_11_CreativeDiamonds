module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Addresses', [
        { address: 'Dirección 1', country: 'País 1', city: 'Ciudad 1', province: 'Provincia 1', zipcode: 12345 },
        { address: 'Dirección 2', country: 'País 2', city: 'Ciudad 2', province: 'Provincia 2', zipcode: 54321 },
      ], {});
    },
  
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Addresses', null, {});
    }
  };