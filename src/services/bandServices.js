const db = require('../database/models');
const fs = require('fs');
const { literalQueryUrl, literalQueryUrlImage } = require('../helpers');
const { disconnect, nextTick } = require('process');

const getAllBands = async (req, { withPagination = "false", page = 1, limit = 6 }) => {
    try {
        let options = {
            include: [
                {
                    model: db.Category,
                    association: 'category',
                    attributes: ['name', 'id']
                }
            ],
            attributes: {
                include: [literalQueryUrl(req, 'bands', 'Band.id')],
                exclude: ['categoryId']
            }
        };

        if (withPagination === "true") {
            options = {
                ...options,
                offset: (page - 1) * limit,
                limit: limit
            };

            const { count, rows: bands } = await db.Band.findAndCountAll(options);

            return {
                count,
                bands
            };
        }

        const { count, rows: bands } = await db.Band.findAndCountAll(options);

        return {
            count,
            bands
        };
    } catch (error) {
        throw {
            status: 500,
            message: error.message
        };
    }
}

const getOneBand = async (req, id) => {
    try {
        const band = await db.Band.findByPk(id,{
            include: [
                {
                    model: db.Category,
                    association: 'category',
                    attributes: ['name', 'id']
                }
            ],
            attributes: {
                include: [literalQueryUrl(req, 'bands', 'Band.id')],
                exclude: ['categoryId']
            }
        })
        return band
        
    } catch (error) {
        throw {
            status : 500,
            message : error.message
        }
    }
}

const createBand = async (req,res) => {
    try {
        
        const newBand = await db.Band.create({
            ...data,
        })
      
        return newBand
        
    } catch (error) {
        throw {
            status : 500,
            message : error.message
        }
    }
}
const storeBand = async (data) => {
    try {
    

        const newBand = await db.Band.create({
            name: data.name.trim(),
            history: data.history.trim(),
            mainImage: data.mainImage.trim(),
            image: data.image.trim(),
            dateFounded: data.dateFounded,
            dateEnded: data.dateEnded,
            totalShows: data.totalShows,
            nextShows: data.nextShows.trim(),
            resume : data.resume.trim(),
            phrase : data.phrase.trim(),
            categoryId : data.categoryId

        })
        return newBand
        const band = await getOneBand(req, newBand.id)
        return band
        
    } catch (error) {
        throw {
            status : 500,
            message : error.message
        }
    }
}

const updateBand = async (req) => {
    try {

        const {
            name,
            history,
            mainImage,
            image,
            dateFounded,
            dateEnded,
            totalShows,
            nextShows,
            resume,
            phrase,
            categoryId
        } = req.body

        await db.Band.update(
            {
                name: name.trim(),
                history: history.trim(),
                mainImage: mainImage.trim(),
                image: image.trim(),
                dateFounded,
                dateEnded,
                totalShows,
                nextShows: nextShows.trim(),
                resume: resume.trim(),
                phrase: phrase.trim(),
                categoryId
            },
            {
                where : {id : req.params.id}
            }
        )

        const band = await getOneBand(req, req.params.id)
        return band
        
    } catch (error) {
        throw {
            status: 500,
            message: error.message
        }
    }
}

const destroyBand = async (id) => {
    try {
        const destroyBand = await db.Band.destroy(
            {
                where : {id}
            }
        )
        return destroyBand
        
    } catch (error) {
        throw {
            status: 500,
            message: error.message
        }
    }
}

module.exports = {
    getAllBands,
    getOneBand,
    createBand,
    updateBand,
    destroyBand,
    storeBand
}