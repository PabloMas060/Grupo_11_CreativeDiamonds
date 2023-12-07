const db = require('../../database/models');

const {getAllAlbums, getOneAlbum, createAlbum, storeAlbum, updateAlbum, destroyAlbum, getExclusiveAlbums} = require('../../services/albumServices');

const createResponseError = require('../../helpers/createResponseError');
const {validatiorResult, validationResult} = require('express-validator');
const {getAllBands} = require('../../services/bandServices');
const {getAllGenres} = require('../../services/genreServices');

module.exports =  {
    list: async (req,res) => {
        try {
            const {withPagination = "true" , page = 1, limit = 6} = req.query;
            const {count, albums,pages} = await getAllAlbums(req, {
                withPagination,
                page,
                limit : +limit
            });
            let data = {
                count,
                albums
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
                    url: '/api/albums'
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
            const album = await getOneAlbum(req, id);

            const response = {
                ok: true,
                meta: {
                    status: 200, 
                    total : 1,
                    url: `/api/albums/${id}`
                },
                data: {
                    id: album.id,
                    title: album.title,
                    discography : album.discography,
                    image : album.image,
                    year : album.year,
                    price : album.price,
                    discount : album.discount,
                    description : album.description,
                    exclusive : album.exclusive,
                    bandId : album.bandId,
                    genreId : album.genreId
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

            const newAlbum = await createAlbum(req.body);
            const bands = await getAllBands();
            const genres = await getAllGenres();

            return res.status(200).json({
                ok:true,
                meta : {
                    status: 201,
                    total: 1 ,
                    url : `/api/albums/${newAlbum.id}`
                },
                data: newAlbum,
                bands,
                genres
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
            const album = await updateAlbum(req)
            return res.status(200).json({
                ok: true,
                data : {album}
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

            const deleteAlbum = await destroyAlbum(id);
            return res.status(200).json({
                ok:true,
                meta: {
                    status: 200,
                    total: 1,
                    url: `/api/albums/${id}`
                },
                data: deleteAlbum
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
            const { count, albums, pages} = await getExclusiveAlbums(req, {
                whitPagination,
                page,
                limit: +limit
            });
            let data = {
                count,
                albums
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
                    url: '/api/albums/exclusive'
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