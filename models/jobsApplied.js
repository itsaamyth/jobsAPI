const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema
const jobsSchema = new mongoose.Schema({

    jobId :{
        type:mongoose.Schema.Types.ObjectId , ref:'Jobs',
        required:true,
    },
    candidateId:{
        type:mongoose.Schema.Types.ObjectId , ref:'candidateUser',
        required:true,
    },
    status:{
        type:String,
        required:true
    },

},{timestamps:true})


module.exports = mongoose.model("jobsApplied",jobsSchema)