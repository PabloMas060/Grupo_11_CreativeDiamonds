module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Addresses', [
      {
        address: 'Dirección 1',
        country: 'País 1',
        city: 'Ciudad 1',
        province: 'Provincia 1',
        zipcode: 12345,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address: 'Dirección 2',
        country: 'País 2',
        city: 'Ciudad 2',
        province: 'Provincia 2',
        zipcode: 54321,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Addresses', null, {});
  }
};