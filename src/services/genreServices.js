const db = require('../database/models');

module.exports = {
    getAllGenres: async () => {
        try {
            const genres = await db.Genre.findAll()
            return genres
        } catch (error) {
            throw {
                status: 500,
                message: error.message
            }
        }
    },

getFindAndCountAllGenres: async () => {
        try {
            const { count, rows: genres } = await db.Genre.findAndCountAll({
                order: [['name']]
            });
            return { genres, count }
        } catch (error) {
            throw {
                status: 500,
                message: error.message
            }
        }
    }
}