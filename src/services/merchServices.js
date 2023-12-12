const db = require('../database/models');
const fs = require('fs');
const { literalQueryUrl, literalQueryUrlImage } = require('../helpers');

const getAllMerchs = async (req, { withPagination = "false", page = 1, limit = 6}) => {
    try {
        let options = {
            include: [
                {
                    model: db.Type,
                    association: 'type',
                    attributes: ['name', 'id']
                },
                {
                    model: db.Band,
                    association: 'band',
                    attributes: ['name', 'id']
                }
            ],
            attributes: {
                include: [literalQueryUrl(req, 'merchs', 'Merch.id')],
                exclude: ['typeId', 'bandId']
            }
        };

        if (withPagination === true) {
            options = {
                ...options,
                pages,
                paginate : limit
            };
            const {docs, pages, total} = await db.Merch.paginate(options)

            return {
                merchs : docs,
                pages,
                count : total
            }
        }

        const {count, rows: merchs} = await db.Merch.findAndCountAll(options)

        return {
            count,
            merchs
        }
        
    } catch (error) {
        throw {
            status : 500,
            message : error.message
        }
    }
}

const getOneMerch = async (req, id) => {
    try {
        const merch = await db.Merch.findByPk(id,{
            include: [
                {
                    model: db.Type,
                    association: 'type',
                    attributes: ['name', 'id']
                },
                {
                    model: db.Band,
                    association: 'band',
                    attributes: ['name', 'id']
                }
            ],
            attributes: {
                include: [literalQueryUrl(req, 'merchs', 'Merch.id')],
                exclude: ['typeId', 'bandId']
            }
        })
        return merch
        
    } catch (error) {
        throw {
            status : 500,
            message : error.message
        }
    }
}

const createMerch = async (req) => {
    try {
        const newMerch = await db.Merch.create({
            ...data
        })
        return newMerch
    } catch (error) {
        throw {
            status : 500,
            message : error.message
        }
    }
}
const storeMerch = async (data) => {
    try {
    

        const newMerch = await db.Merch.create({
            name: data.name.trim(),
            price: data.price,
            discount: data.discount ? data.discount : 0,
            cantidadVendida: data.cantidadVendida ? data.cantidadVendida : 0,
            bandId: data.bandId,
            typeId: data.typeId,
            exclusive: data.exclusive,
            description : data.description.trim(),
            image : data.image.trim()
        })
        return newMerch
        const merch = await getOneMerch(req, newMerch.id)
        return merch
        
    } catch (error) {
        throw {
            status : 500,
            message : error.message
        }
    }
}

const updateMerch = async (req) => {
    try {

        const {
            name,
            price,
            discount,
            bandId,
            typeId,
            exclusive,
            description,
            image,
            cantidadVendida
        } = req.body

        await db.Merch.update(
            {
                name: name.trim(),
                price,
                discount,
                bandId,
                typeId,
                exclusive,
                description : description.trim(),
                image,
                cantidadVendida
            },
            {
                where : {id : req.params.id}
            }
        )

        const Merch = await getOneMerch(req, req.params.id)
        return merch
        
    } catch (error) {
        throw {
            status: 500,
            message: error.message
        }
    }
}

const destroyMerch = async (id) => {
    try {
        const destroyMerch = await db.Merch.destroy(
            {
                where : {id}
            }
        )
        return destroyMerch
        
    } catch (error) {
        throw {
            status: 500,
            message: error.message
        }
    }
}

const getExclusiveMerchs = async (req,{ withPagination = "false", page = 1, limit = 6}) => {
    try {
        let options = {
            include : ['id', 'name'],
            attributes: {
                include: [literalQueryUrl(req, 'merchs', 'Merch.id')],
                exclude: ['typeId', 'bandId']
            },
            where : {
                exclusive : 1
            }
        }
        if (withPagination === true) {
            options = {
                ...options,
                pages,
                paginate : limit
            };
            const {docs, pages, total} = await db.Merch.paginate(options)

            return {
                merchs : docs,
                pages,
                count : total
            }
        }

        const {count, rows: merchs} = await db.Merch.findAndCountAll(options)

        return {
            count,
            merchs
        }
    } catch (error) {
        throw {
            status: 500,
            message: error.message
        }
    }
}

module.exports = {
    getAllMerchs,
    getOneMerch,
    createMerch,
    updateMerch,
    destroyMerch,
    getExclusiveMerchs,
    storeMerch
}