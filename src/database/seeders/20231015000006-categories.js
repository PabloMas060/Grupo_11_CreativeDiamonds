module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Categories', [
        { name: 'Iconos del rock' },
        { name: 'Orgullo nacional' },
        { name: 'Indies que apoyamos' },
        { name: 'Clasicos' }
      ], {});
    },
  
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Categories', null, {});
    }
  };