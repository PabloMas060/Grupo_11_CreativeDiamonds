const db = require('../database/models');
const fs = require('fs');
const { literalQueryUrl, literalQueryUrlImage } = require('../helpers');

const getAllAlbums = async (req, { withPagination = "false", page = 1, limit = 6}) => {
    try {
        
        
    } catch (error) {
        throw {
            status : 500,
            message : error.message
        }
    }
}