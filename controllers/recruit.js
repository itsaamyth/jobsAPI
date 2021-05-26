var recruitSignupModel = require("../models/recruitUser");
var JobsModel = require("../models/jobs");
var jobsAppliedModel = require('../models/jobsApplied')
const mongoose = require("mongoose");

exports.signup=(req,res)=>{

    recruitSignupModel = new recruitSignupModel(req.body)
    recruitSignupModel.save((err,user)=>{
        if(err){
            return res.status(400).json({
                err:"Not able to save user in the DB"
            })
        }
        res.json({
            message:"Recruiter Added Successfully",
            name:user.name,
            email:user.email,
            id:user._id
        })
    })
}

exports.signin=(req,res)=>{

    var email=req.body.email
    var password = req.body.password
    recruitSignupModel.find({
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

exports.addJobs = (req, res)=>{
    Jobs = new JobsModel(req.body)
    Jobs.save((err,Jobs)=>{
        if(err){
            return res.status(400).json({
                err:"Not able to save user to DB"
            })
        }
        res.json({message:"Jobs Details Added Successfully",Jobs})
    })
};

exports.appliedCandidates=(req,res)=>{
    var jobId = req.params.jobId
    var appliedCandidates =  jobsAppliedModel.find({jobId:jobId})
    appliedCandidates.populate('candidateId','name lastname email').exec(function(err,job){
        if(err){
            return res.status(400).json({
                err:"Not able to get applied candidates list"
            })
        }
        res.json({
            message:"List of Applied Candidates",
            job
        })
    })
}

exports.rejectCandidate=(req,res)=>{
    var appliedId = req.params.appliedId
    var appliedCandidates =  jobsAppliedModel.findByIdAndUpdate(appliedId,{'status':'Rejected'},{new:true})
    appliedCandidates.populate('jobId','companyName location jobDetails jobDescription jobOpenings').populate('candidateId','name lastname email').exec(function(err,job){
        if(err){
            return res.status(400).json({
                err:"Unable to update the candidate status"
            })
        }
        res.json({
            message:"Candidate Rejected Successfully",
            job
        })
    })

}


exports.acceptCandidate=(req,res)=>{
    var appliedId = req.params.appliedId
    var jobId = req.params.jobId
    var appliedCandidates =  jobsAppliedModel.findByIdAndUpdate(appliedId,{'status':'Accepted'},{new:true})
    var jobOpening = JobsModel.findByIdAndUpdate(jobId, { $inc:{jobOpenings:-1}},{new:true})
    jobOpening.exec()
    appliedCandidates.populate('jobId','companyName location jobDetails jobDescription jobOpenings').populate('candidateId','name lastname email').exec(function(err,job){
        if(err){
            return res.status(400).json({
                err:err
            })
        }
        res.json({
            message:"Candidate Accepted Successfully",
            job
        })
    })
}