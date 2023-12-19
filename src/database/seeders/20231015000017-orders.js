'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Orders', [
        {
            date: new Date(),
            total: 0,
            userId: 1,
            status: 'pending',
            createdAt: new Date(),
             updatedAt: new Date()
          },
          {
            date: new Date(),
            total: 0,
            userId: 2,
            status: 'pending',
            createdAt: new Date(),
             updatedAt: new Date()
          },
        

                                        
          
                    

          
                    
        
    
    
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Orders', null, {});
  }
};