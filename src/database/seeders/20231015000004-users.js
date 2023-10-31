const bcrypt = require('bcrypt');
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('admin1', 10),
        years: 25,
        avatar: 'avatar_ejemplo1.png',
        nick_name: 'A.D.M.I.N',
        first_name: 'Admin',
        last_name: 'Istrador',
        about: 'Soy el admin',
        state: 'Un gran poder conlleva una gran responsabilidad',
        addressId: 1, 
        rolId: 1,
        rangeId: 1,
        identificatorId: 3,
        headId: 5,
        faceId: 4,
        bustId: 2, 
        hatId: 2, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'users@gmail.com',
        password: bcrypt.hashSync('users1', 10),
        years: 25,
        avatar: 'avatar_ejemplo1.png',
        nick_name: 'User',
        first_name: 'Usu',
        last_name: 'Ario',
        about: 'Soy usuario',
        state: 'Solo un monton de 1s y 0s',
        addressId: 2, 
        rolId: 2,
        rangeId: 1,
        identificatorId: 2,
        headId: 4,
        faceId: 2,
        bustId: 3, 
        hatId: 4, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
    
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};