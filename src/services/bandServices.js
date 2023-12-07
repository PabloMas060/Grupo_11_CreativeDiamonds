/* const db = require('../database/models');
const fs = require('fs');
const { literalQueryUrl, literalQueryUrlImage } = require('../helpers');

const getAllBands = async (req, { withPagination = "false", page = 1, limit = 6}) => {
    try {
        let options = {
            include: [
                {
                    model: db.Category,
                    association: 'category',
                    attributes: ['name', 'id']
                },
                {
                    model: db.Band,
                    association: 'band',
                    attributes: ['name', 'id']
                }
            ],
            attributes: {
                include: [literalQueryUrl(req, 'albums', 'Album.id')],
                exclude: ['genreId', 'bandId']
            }
        };

        if (whitPagination === true) {
            options = {
                ...options,
                pages,
                paginate : limit
            };
            const {docs, pages, total} = await db.Album.paginate(options)

            return {
                albums : docs,
                pages,
                count : total
            }
        }

        const {count, rows: albums} = await db.Album.findAndCountAll(options)

        return {
            count,
            albums
        }
        
    } catch (error) {
        throw {
            status : 500,
            message : error.message
        }
    }
}

const getOneAlbum = async (req, id) => {
    try {
        const album = await db.Album.findByPk(id,{
            include: [
                {
                    model: db.Genre,
                    association: 'genre',
                    attributes: ['name', 'id']
                },
                {
                    model: db.Band,
                    association: 'band',
                    attributes: ['name', 'id']
                }
            ],
            attributes: {
                include: [literalQueryUrl(req, 'albums', 'Album.id')],
                exclude: ['genreId', 'bandId']
            }
        })
        return album
        
    } catch (error) {
        throw {
            status : 500,
            message : error.message
        }
    }
}

const createAlbum = async (req) => {
    try {
        const newAlbum = await db.Album.create({
            ...data
        })
        return newAlbum
    } catch (error) {
        throw {
            status : 500,
            message : error.message
        }
    }
}
const storeAlbum = async (req) => {
    try {
        const {
            title,
            discography,
            year,
            price,
            discount,
            bandId,
            genreId,
            exclusive,
            description,
            image
        } = req.body

        const newAlbum = await db.Album.create({
            title: title.trim(),
            discography: discography.trim(),
            year,
            price,
            discount,
            bandId,
            genreId,
            exclusive,
            description : description.trim(),
            image
        })
        
        const album = await getOneAlbum(req, newAlbum.id)
        return album
        
    } catch (error) {
        throw {
            status : 500,
            message : error.message
        }
    }
}

const updateAlbum = async (req) => {
    try {

        const {
            title,
            discography,
            year,
            price,
            discount,
            bandId,
            genreId,
            exclusive,
            description,
            image
        } = req.body

        await db.Album.update(
            {
                title: title.trim(),
                discography: discography.trim(),
                year,
                price,
                discount,
                bandId,
                genreId,
                exclusive,
                description : description.trim(),
                image
            },
            {
                where : {id : req.params.id}
            }
        )

        const album = await getOneAlbum(req, req.params.id)
        return album
        
    } catch (error) {
        throw {
            status: 500,
            message: error.message
        }
    }
}

const destroyAlbum = async (id) => {
    try {
        const destroyAlbum = await db.Album.destroy(
            {
                where : {id}
            }
        )
        return destroyAlbum
        
    } catch (error) {
        throw {
            status: 500,
            message: error.message
        }
    }
}

const getExclusiveAlbums = async (req,{ whitPagination = "false", page = 1, limit = 6}) => {
    try {
        let options = {
            include : ['id', 'name'],
            attributes: {
                include: [literalQueryUrl(req, 'albums', 'Album.id')],
                exclude: ['genreId', 'bandId']
            },
            where : {
                exclusive : 1
            }
        }
        if (whitPagination === true) {
            options = {
                ...options,
                pages,
                paginate : limit
            };
            const {docs, pages, total} = await db.Album.paginate(options)

            return {
                albums : docs,
                pages,
                count : total
            }
        }

        const {count, rows: albums} = await db.Album.findAndCountAll(options)

        return {
            count,
            albums
        }
    } catch (error) {
        throw {
            status: 500,
            message: error.message
        }
    }
}

module.exports = {
    getAllAlbums,
    getOneAlbum,
    createAlbum,
    updateAlbum,
    destroyAlbum,
    getExclusiveAlbums,
    storeAlbum
} */