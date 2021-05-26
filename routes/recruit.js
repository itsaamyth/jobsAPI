const express = require('express')
var router = express.Router()
const {signup,signin,addJobs,appliedCandidates,rejectCandidate, acceptCandidate} = require('../controllers/recruit')


router.post('/recruit/signup',signup)
router.post('/recruit/login',signin)
router.post('/recruit/addJobs',addJobs)
router.get('/recruit/appliedCandidates/:jobId',appliedCandidates)
router.put('/recruit/appliedCandidates/reject/:appliedId',rejectCandidate)
router.put('/recruit/appliedCandidates/accept/:appliedId/:jobId',acceptCandidate)


module.exports = router