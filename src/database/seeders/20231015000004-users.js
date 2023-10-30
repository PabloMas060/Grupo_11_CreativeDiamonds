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
        about: "Esto es un about me",
        state: "Conectado",
        rangeId: 2,
        rolId: 1,
        addressId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'usuario2@example.com',
        years: 25,
        avatar: 'avatar2.jpg',
        password: 'hashedpassword2',
        nick_name: 'User2',
        first_name: 'Nombre2',
        last_name: 'Apellido2',
        about: "Esto es un about me",
        state: "Conectado",
        rangeId: 2,
        rolId: 1,
        addressId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'usuario3@example.com',
        years: 25,
        avatar: 'avatar3.jpg',
        password: 'hashedpassword3',
        nick_name: 'User3',
        first_name: 'Nombre3',
        last_name: 'Apellido3',
        about: "Esto es un about me",
        state: "Ocupado",
        rangeId: 1,
        rolId: 3,
        addressId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'usuario4@example.com',
        years: 25,
        avatar: 'avatar2.jpg',
        password: 'hashedpassword4',
        nick_name: 'User4',
        first_name: 'Nombre4',
        last_name: 'Apellido4',
        about: "Esto es un about me",
        state: "Conectado",
        rangeId: 2,
        rolId: 2,
        addressId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};