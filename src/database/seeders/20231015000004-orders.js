'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Orders', [
      { date: '2023-10-15', total: 50, userId: 1, cartId: 1 },
      { date: '2023-10-16', total: 30, userId: 2, cartId: 2 },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Orders', null, {});
  }
};