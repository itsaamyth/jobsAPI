const express = require('express')
var router = express.Router()
const {getJobs} = require('../controllers/home')


router.get('/',getJobs)


module.exports = router