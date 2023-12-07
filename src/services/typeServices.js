const db = require('../database/models');

module.exports = {
    getAllTypes: async () => {
        try {
            const types = await db.Type.findAll()
            return types
        } catch (error) {
            throw {
                status: 500,
                message: error.message
            }
        }
    },

getFindAndCountAllTypes: async () => {
        try {
            const { count, rows: types } = await db.Type.findAndCountAll({
                order: [['name']]
            });
            return { types, count }
        } catch (error) {
            throw {
                status: 500,
                message: error.message
            }
        }
    }
}