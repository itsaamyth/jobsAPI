const mongoose = require('mongoose')
const jobsSchema = new mongoose.Schema({
    companyName :{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true
    },
    jobDetails:{
        type:String,
        required:true
    },
    jobOpenings:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    jobDescription:{
        type:String,
        required:true
    },
    companyDescription:{
        type:String,
        required:true
    },
},{timestamps:true})

module.exports = mongoose.model("Jobs",jobsSchema)