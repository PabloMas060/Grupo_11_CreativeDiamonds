const db = require('../database/models');

module.exports = {
    getAllBands : async () => {
        try {
            const totalBands = await db.Band.count();
            return totalBands
        } catch (error) {
            throw {
                status : 500,
                message : error.message
            }
        }
    },
    getAllAlbums : async () => {
        try {
            const totalAlbums = await db.Album.count();
            return totalAlbums
        } catch (error) {
            throw {
                status : 500,
                message : error.message
            }
        }
    },
    getAllMerchs : async () => {
        try {
            const totalMerchs = await db.Merch.count();
            return totalMerchs
        } catch (error) {
            throw {
                status : 500,
                message : error.message
            }
        }
    },
    getAllCategories : async () => {
        try {
            const totalCategories = await db.Category.count();
            return totalCategories
        } catch (error) {
            throw {
                status : 500,
                message : error.message
            }
        }
    },
    getAllTracks : async () => {
        try {
            const totalTracks = await db.Track.count();
            return totalTracks
        } catch (error) {
            throw {
                status : 500,
                message : error.message
            }
        }
    },
    getAllArtists : async () => {
        try {
            const totalArtists = await db.Artist.count();
            return totalArtists
        } catch (error) {
            throw {
                status : 500,
                message : error.message
            }
        }
    },
    getAllUsers : async () => {
        try {
            const totalUsers = await db.User.count();
            return totalUsers
        } catch (error) {
            throw {
                status : 500,
                message : error.message
            }
        }
    },


}