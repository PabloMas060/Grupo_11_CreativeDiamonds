const db = require('../database/models');
const { Op } = require('sequelize');

module.exports = mtd = {
    getOrder: async ({ userId }) => {
        if (!userId) {
            throw {
                ok: false,
                message: "Debes ingresar un id de usuario"
            }
        }
        const [order] = await db.Order.findOrCreate({
            where: {
                [Op.and]: [
                    { userId },
                    { status: "pending" }
                ]
            },
            defaults: {
                userId
            },
            include: [ {
                    association: 'cart',  
                    through: {
                        attributes: ['quantity']
                    },
                }],
        }) 
        console.log(order);

        return order;
    },
    getCart: ({ orderId, albumId }) => {
        return db.Cart.findOrCreate({
            where: {
                [Op.and]: [
                    { orderId },
                    { albumId }
                ]
            },
            defaults:
            {
                orderId,
                albumId
            }
        })
    },
    calcularTotal: ({ cart }) => {
        return cart.reduce((acum, { price, Cart, discount }) => {
            const priceCalc = discount ? price - (price * discount) / 100 : price;
            acum += priceCalc * Cart.quantity
            return acum
        }, 0)
    },
    removeCart: ({ orderId, albumId }) => {
        db.Cart.destroy({
            where: {
                [Op.and]: [
                    { orderId },
                    { albumId }
                ]
            }
        })
    },
    createProductInCart: async ({ userId, albumId }) => {
        if (!userId || !albumId) {
            throw {
                ok: false,
                message: "Los Id de usuario y Id de album son requeridos"
            }
        }
        const order = await mtd.getOrder({ userId })

        await mtd.getCart({ orderId: order.id, albumId })
        const orderReload = await order.reload({ include: { all: true } })
        order.total = mtd.calcularTotal(orderReload)
        await order.save()
    },
    removeProductFromCart: async ({ userId, albumId }) => {
        if (!userId || !albumId) {
            throw {
                ok: false,
                message: "Los Id de usuario y Id de album son requeridos"
            }
        }
        const order = await mtd.getOrder({ userId });
        await mtd.removeCart({ orderId: order.id, albumId, merchId })
        const orderReload = await order.reload({ include: { all: true } })
        order.total = mtd.calcularTotal(orderReload)
        await order.save()
    },
    moreOrLessQuantityFromProduct: async ({
        userId,
        albumId,
        action = "more"
    }) => {
        if (!userId || !albumId) {
            throw {
                ok: false,
                message: "Los Id de usuario y Id de album son requeridos"
            }
        }
        const order = await mtd.getOrder({ userId })
        const [cart, isCreated] = await mtd.getCart({
            orderId: order.id,
            albumId
        })
        if (!isCreated) {
            if (action === "more") {
                cart.quantity++
            } else {
                if (cart.quantity > 1) {
                    cart.quantity--
                }
            }
            await cart.save()
        }
        const orderReload = await order.reload({ include: { all: true } })
        order.total = mtd.calcularTotal(orderReload)
        await order.save()
        return order
    },
    clearAllProductFromCart: async ({ userId }) => {
        if (!userId) {
            throw {
                ok: false,
                message: "El ID de usuario es requerido"
            }
        }
        const order = await mtd.getOrder({ userId })
        await db.Cart.destroy({
            where: {
                orderId: order.id
            }
        })
        const orderReload = await order.reload({ include: { all: true } })
        order.total = mtd.calcularTotal(orderReload)
        await order.save()
    },
    modifyStatusFromOrder: async ({ userId, status }) => {
        if (!userId || !status) {
            throw {
                ok: false,
                message: "Debe ingresar un usuario y un estado"
            }
        }
        const order = await mtd.getOrder({ userId })
        order.status = status
        return order.save()
    }

}