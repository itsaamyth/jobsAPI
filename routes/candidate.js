const express = require('express')
var router = express.Router()
const {signup,signin,apply,applied,deleteJob} = require('../controllers/candidate')
const { getJobById } = require('../controllers/home')


router.post('/candidate/signup',signup)
router.post('/candidate/login',signin)
router.post('/candidate/apply/:jobId/:candidateId',apply)
router.get('/candidate/applied/:candidateId',applied)
router.delete('/candidate/applied/:jobId',deleteJob)




module.exports = router