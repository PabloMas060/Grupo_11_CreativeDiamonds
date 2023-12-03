const db = require('../database/models')
module.exports={
    getCompletedOrdersWithProducts: async ({userId}) => {
        try {
          const orders = await db.Order.findAll({
            where: {
              userId,
              status: 'completed'
            },
            include: [
              {
                model: db.Album,
                as: 'cart',
                through: {
                  model: db.Cart,
                  attributes: ['quantity']
                },
                
              },
              {
                model: db.Merch,
                as:'cart2',
                through: {
                    model: db.Cart,
                    attributes: ['quantity']
                }
              }
            ]
          });
      
          return orders;
      
        } catch (error) {
          console.log(error);
          throw error;
        }
      }
}

