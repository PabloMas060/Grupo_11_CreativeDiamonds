'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      { 
        email: 'usuario1@example.com',
        years: 30,
        avatar: 'avatar1.jpg',
        password: 'hashedpassword1',
        nick_name: 'User1',
        first_name: 'Nombre1',
        last_name: 'Apellido1',
        rolId: 2, 
        addressId: 1,
      },
      { 
        email: 'usuario2@example.com',
        years: 25,
        avatar: 'avatar2.jpg',
        password: 'hashedpassword2',
        nick_name: 'User2',
        first_name: 'Nombre2',
        last_name: 'Apellido2',
        rolId: 1,
        addressId: 2 
      },
      { 
        email: 'usuario3@example.com',
        years: 25,
        avatar: 'avatar3.jpg',
        password: 'hashedpassword3',
        nick_name: 'User3',
        first_name: 'Nombre3',
        last_name: 'Apellido3',
        rolId: 3,
        addressId: 3 
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};