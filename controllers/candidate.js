var candidateUser = require("../models/candidateUser");
var jobsApplied = require("../models/jobsApplied");
const mongoose = require("mongoose");
const jobs = require("../models/jobs");

exports.signup=(req,res)=>{

    candidateSignupModel = new candidateUser(req.body)
    candidateSignupModel.save((err,user)=>{
        if(err){
            return res.status(400).json({
                err:"Not able to save user in the DB"
            })
        }
        res.json({
            message:"Candidate Added Successfully",
            name:user.name,
            email:user.email,
            id:user._id
        })
    })
}

exports.signin=(req,res)=>{

    var email=req.body.email
    var password = req.body.password
    candidateUser.find({
        email:email,
        password:password
    })
    .exec()
    .then(user=>{
        if(user.length<1){
            res.status(404).json({
                message:"Auth Failed",
            })
        }
        else{
            if(email==email || password==password){
                res.json({
                    message:`${email} Logged in Successfully`
                })
            }
            else{
                res.status(404).json({
                    message:"Auth Failed",
                })
            }
        }
    })
}

exports.apply=(req,res)=>{
    var jobId = req.params.jobId
    var candidateId = req.params.candidateId
    var status = "Applied"
    var jobsAppliedModel = new jobsApplied({
        jobId:jobId,candidateId:candidateId,status:status,
    })
    jobsAppliedModel.save(function(err,job){
        if(err){
            return res.status(400).json({
                err:err
            })
        }
        res.json({
            message:"Candidate Job Applied Successfully",
            job
        })
    })
}

exports.applied=(req,res)=>{
    var candidateId = req.params.candidateId
    jobsApplied.find({candidateId:candidateId}).populate('jobId','companyName location jobDetails jobDescription').populate('candidateId','name lastname email').exec((err,job)=>{
        if(err){
            return res.status(400).json({
                err:"Not able to Get Applied Jobs Details in the DB"
            })
        }
        res.json({
            message:"Candidate Jobs Applied List",
            job
        })
    })
}

exports.deleteJob=(req,res)=>{
    var jobId = req.params.jobId
    var jobsAppliedModel = jobsApplied.findByIdAndDelete(jobId)
    jobsAppliedModel.exec(function(err,job){
        if(err){
            return res.status(400).json({
                err:"Not able to delete job in the DB"
            })
        }
        res.json({
            message:"Candidate Job Deleted Successfully",
            job
        })
    })
}
