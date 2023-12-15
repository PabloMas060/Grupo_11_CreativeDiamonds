const db = require('../database/models');
const fs = require('fs');
const { literalQueryUrl, literalQueryUrlImage } = require('../helpers');
const { disconnect } = require('process');

 /* const getAllAlbums = async (req, { withPagination = "false", page = 1, limit = 6}) => {
    try {
        let options = {
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
        };

        if (withPagination === "true") {
            options = {
                ...options,
                page,
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
} */
const getAllAlbums = async (req, { withPagination = "false", page = 1, limit = 6}) => {
    try {
        let options = {
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
        };

        if (withPagination === "true") {
            options = {
                ...options,
                offset: (page - 1) * limit,
                limit: limit
            };

            const {count, rows: albums} = await db.Album.findAndCountAll(options);

            return {
                count,
                albums
            };
        }

        const {count, rows: albums} = await db.Album.findAndCountAll(options);

        return {
            count,
            albums
        };
        
    } catch (error) {
        throw {
            status : 500,
            message : error.message
        };
    }
};

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

const createAlbum = async (req,res) => {
    try {
        
        const newAlbum = await db.Album.create({
            ...data,
        })
      
        return newAlbum
        
    } catch (error) {
        throw {
            status : 500,
            message : error.message
        }
    }
}
const storeAlbum = async (data) => {
    try {
    

        const newAlbum = await db.Album.create({
            title: data.title.trim(),
            discography: data.discography.trim(),
            year: data.year,
            price: data.price,
            discount: data.discount ? data.discount : 0,
            bandId: data.bandId,
            genreId: data.genreId,
            exclusive: data.exclusive,
            description : data.description.trim(),
            image : data.image.trim()
        })
        return newAlbum
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

const getExclusiveAlbums = async (req, { withPagination = "false", page = 1, limit = 6 }) => {
    try {
        let options = {
            attributes: {
                include: [literalQueryUrl(req, 'albums', 'Album.id')],
                exclude: ['genreId', 'bandId']
            },
            where: {
                exclusive: 1
            }
        };

        if (withPagination === "true") {
            options = {
                ...options,
                offset: (page - 1) * limit,
                limit: limit
            };

            const { count, rows: albums } = await db.Album.findAndCountAll(options);

            return {
                count,
                albums
            };
        }

        const { count, rows: albums } = await db.Album.findAndCountAll(options);

        return {
            count,
            albums
        };
    } catch (error) {
        throw {
            status: 500,
            message: error.message
        };
    }
};


module.exports = {
    getAllAlbums,
    getOneAlbum,
    createAlbum,
    updateAlbum,
    destroyAlbum,
    getExclusiveAlbums,
    storeAlbum
}