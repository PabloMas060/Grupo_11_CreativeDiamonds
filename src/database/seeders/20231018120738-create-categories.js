'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      { id: 1, name: 'Iconos del rock', createdAt: new Date(), updatedAt: new Date() },
      { id: 2, name: 'Clásicos', createdAt: new Date(), updatedAt: new Date() },
      { id: 3, name: 'Orgullo Nacional', createdAt: new Date(), updatedAt: new Date() },
      { id: 4, name: 'Indies que apoyamos', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
