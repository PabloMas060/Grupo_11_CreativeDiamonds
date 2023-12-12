const db = require('../../database/models');

const {getAllMerchs, getOneMerch, storeMerch, updateMerch, destroyMerch, getExclusiveMerchs} = require('../../services/merchServices');

const createResponseError = require('../../helpers/createResponseError');
const {validationResult} = require('express-validator');
const {getAllBands} = require('../../services/bandServices');
const {getAllTypes} = require('../../services/typeServices');

module.exports =  {
    list: async (req,res) => {
        try {
            const {withPagination = "true" , page = 1, limit = 6} = req.query;
            const {count, merchs,pages} = await getAllMerchs(req, {
                withPagination,
                page,
                limit : +limit
            });
            let data = {
                count,
                merchs
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
                    url: '/api/merchs'
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
            const merch = await getOneMerch(req, id);

            const response = {
                ok: true,
                meta: {
                    status: 200, 
                    total : 1,
                    url: `/api/merchs/${id}`
                },
                data: {
                    id: merch.id,
                    name: merch.name,
                    image : merch.image,
                    price : merch.price,
                    discount : merch.discount,
                    description : merch.description,
                    exclusive : merch.exclusive,
                    typeId : merch.typeId,
                    bandId : merch.bandId
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

            const newMerch = await storeMerch(req.body);
            const bands = await getAllBands();
            const types = await getAllTypes();

            return res.status(200).json({
                ok:true,
                meta : {
                    status: 201,
                    total: 1 ,
                    url : `/api/merchs/${newMerch.id}`
                },
                data: newMerch,
                bands,
                types
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
            const merch = await updateMerch(req)
            return res.status(200).json({
                ok: true,
                data : {merch}
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

            const deleteMerch = await destroyMerch(id);
            return res.status(200).json({
                ok:true,
                meta: {
                    status: 200,
                    total: 1,
                    url: `/api/merchs/${id}`
                },
                data: deleteMerch
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
    exclusive: async (req,res) => {
        try {
            const {withPagination = "true", page = 1, limit =6} = req.query;
            const { count, albums, pages} = await getExclusiveMerchs(req, {
                withPagination,
                page,
                limit: +limit
            });
            let data = {
                count,
                merchs
            }

            if(withPagination === 'true') {
                data = {
                    ...data,
                    pages,
                    currentPage: +page
                }
            }
            return res.status(200).json({
                ok:true,
                data,
                meta : {
                    status:200,
                    url: '/api/merchs/exclusive'
                }
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