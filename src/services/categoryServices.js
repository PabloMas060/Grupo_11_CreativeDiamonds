const db = require('../database/models');

module.exports = {
    getAllCategories: async () => {
        try {
            const categories = await db.Category.findAll()
            return categories
        } catch (error) {
            throw {
                status: 500,
                message: error.message
            }
        }
    },

getFindAndCountAllCategories: async () => {
        try {
            const { count, rows: categories } = await db.Categories.findAndCountAll({
                order: [['name']]
            });
            return { categories, count }
        } catch (error) {
            throw {
                status: 500,
                message: error.message
            }
        }
    }
}