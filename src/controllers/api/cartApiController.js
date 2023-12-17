const sendErrorResponse = require('../../helpers/sendErrorResponse');
const sendSuccessResponse = require('../../helpers/sendSuccesResponse');
const { getOrder, createProductInCart, removeProductFromCart, moreOrLessQuantityFromProduct, clearAllProductFromCart, modifyStatusFromOrder } = require('../../services/cartServices')

module.exports = {
 
    getOrderPending: async (req,res) => {
        try {
/*            const {id} = req.session.userLogin;
 */           const order = await getOrder({userId : 3})
            sendSuccessResponse(res, {data:order})
        } catch (error) {
            sendErrorResponse(res, error)
        }
    },
    addProduct: async (req,res) => {
        try {
            const {albumId} = req.body;
              const {id} = req.session.userLogin  
            await createProductInCart({userId: id, albumId})
            sendSuccessResponse(res)
        } catch (error) {
            sendErrorResponse(res,error)
        }
    },
    removeProduct: async (req, res) => {
        try {
            const { albumId } = req.body;
            const { id } = req.session.userLogin;
            await removeProductFromCart({ userId: id, albumId})
            sendSuccessResponse(res)
        } catch (error) {
            sendErrorResponse(res, error)
        }
    },
    moreQuantity: async (req, res) => {
        try {
            const { albumId } = req.body;
             const { id } = req.session.userLogin;
 
            await moreOrLessQuantityFromProduct({ userId: id, albumId})
            sendSuccessResponse(res)
        } catch (error) {
            sendErrorResponse(res, error)
        }
    },
    lessQuantity: async (req, res) => {
        try {
            const { albumId } = req.body;
            const { id } = req.session.userLogin;

            await moreOrLessQuantityFromProduct({ userId: id, albumId, action: "less" })
            sendSuccessResponse(res)
        } catch (error) {
            sendErrorResponse(res, error)
        }
    },
    clearCart: async (req, res) => {
        try {
          const { id } = req.session.userLogin; 
            await clearAllProductFromCart({ userId: id })
            sendSuccessResponse(res)
        } catch (error) {
            sendErrorResponse(res, error)
        }
    },
    statusOrder: async (req, res) => {
        try {
            const { status } = req.body
             const { id } = req.session.userLogin; 
            await modifyStatusFromOrder({ userId: id, status : 'pending' })
            sendSuccessResponse(res);
        } catch (error) {
            sendErrorResponse(res, error)
        }
    }

}