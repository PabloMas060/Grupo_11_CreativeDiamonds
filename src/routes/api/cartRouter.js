const router = require('express').Router();

const { removeProduct, addProduct, moreQuantity, lessQuantity, clearCart, getOrderPending, statusOrder } = require('../../controllers/api/cartApiController');
const { cart } = require('../../controllers/users/cart')
router
    .get('/', cart)
    .get('/getOrderPending', getOrderPending)
    .post('/addProduct', addProduct)
    .delete('/removeProduct', removeProduct)
    .put('/moreQuantity', moreQuantity)
    .put('/lessQuantity', lessQuantity)
    .delete('/clearCart', clearCart)
    .put('/statusOrder', statusOrder)

module.exports = router