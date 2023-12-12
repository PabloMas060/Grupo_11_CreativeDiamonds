const db = require('../../database/models');

const {getAllBands, getOneBand, createBand, storeBand, updateBand, destroyBand} = require('../../services/bandServices');
const {getAllCategories} =require('../../services/categoryServices');
const createResponseError = require('../../helpers/createResponseError');
const {validationResult} = require('express-validator');

module.exports =  {
    list: async (req,res) => {
        try {
            const {withPagination = "true" , page = 1, limit = 6} = req.query;
            const {count, bands,pages} = await getAllBands(req, {
                withPagination,
                page,
                limit : +limit
            });
            let data = {
                count,
                bands
            }
            if(withPagination === "true") {
                data = {
                    ...data,
                    pages, 
                    currentPage: +page
                }
            }
            return res.status(200).json({
                ok: true,
                data,
                meta: {
                    status : 200,
                    url: '/api/bands'
                }
            })
            
        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok: false,
                error: {
                    status: error.status || 500,
                    message: error.message || "Ha ocurrido un error"
                }
            })
        }
    },
    detail : async (req,res) => {
        try {
            const {id} = req.params;
            const band = await getOneBand(req, id);

            const response = {
                ok: true,
                meta: {
                    status: 200, 
                    total : 1,
                    url: `/api/bands/${id}`
                },
                data: {
                    id: band.id,
                    name: band.name,
                    history : band.history,
                    mainImage : band.mainImage,
                    image : band.image,
                    dateFounded : band.dateFounded,
                    dateEnded : band.dateEnded,
                    totalShows : band.totalShows,
                    nextShows : band.nextShows,
                    resume : band.resume,
                    phrase : band.phrase,
                    categoryId : band.categoryId

                }
            }
            return res.status(200).json(response)            
        } catch (error) {
            return res.status(error.status || 500).json({
                ok: false,
                error: {
                    status: error.status || 500,
                    message: error.message || 'Ocurrió un error'
                }
            })
        }
    },
    store: async (req,res) => {
        try {
            const errors = validationResult(req);

            if(!errors.isEmpty()) throw{
                status: 400,
                message : errors.mapped()
            }
         
            const newBand = await storeBand(req.body);
       
           /*  const bands = await getAllBands(); */
            const categories = await getAllCategories(); 
            return res.status(200).json({
                ok:true,
                meta : {
                    status: 201,
                    total: 1 ,
                    url : `/api/bands/${newBand.id}`
                },
                data: newBand,
              /*   bands, */
                categories
            })
            
        } catch (error) {
            return res.status(error.status || 500).json({
                ok: false,
                error: {
                    status: error.status || 500,
                    message: error.message || 'Ocurrió un error'
                }
            })
        }
    },
    update : async (req,res) => {
        const {id} = req.params.id
        try {
            const errors = validationResult(req, id);

            if(!errors.isEmpty()) throw{
                status: 400,
                message : errors.mapped()
            }
            const band = await updateBand(req)
            return res.status(200).json({
                ok: true,
                data : {band}
            })
        } catch (error) {
            return res.status(error.status || 500).json({
                ok: false,
                error: {
                    status: error.status || 500,
                    message: error.message || 'Ocurrió un error'
                }
            })
        }
    },
    destroy : async (req, res) => {
        try {
            const {params: {id}} = req;

            const deleteBand = await destroyBand(id);
            return res.status(200).json({
                ok:true,
                meta: {
                    status: 200,
                    total: 1,
                    url: `/api/bands/${id}`
                },
                data: deleteBand
            })

        } catch (error) {
            return res.status(error.status || 500).json({
                ok: false,
                error: {
                    status: error.status || 500,
                    message: error.message || 'Ocurrió un error'
                }
            })
        }
    }
}