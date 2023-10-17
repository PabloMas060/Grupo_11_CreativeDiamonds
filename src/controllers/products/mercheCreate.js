const {existsSync, unlinkSync} = require ('fs')
const {validationResult} = require('express-validator');
const db = require ('../../database/models')