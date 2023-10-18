module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {
        name: 'Iconos del rock',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Orgullo nacional',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Indies que apoyamos',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Clasicos',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};