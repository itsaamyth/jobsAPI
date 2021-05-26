var Jobs = require("../models/jobs");
const mongoose = require("mongoose");

exports.getJobs = (req, res) => {
  Jobs.find({}).exec((err, jobs) => {
    if (err) {
      return res.status(400).json({
        error: "No Jobs Found",
      });
    }
    res.json(jobs);
  });
};

exports.getJobById = (req, res,next,id) => {
  Jobs.findById(id).exec((err, job) => {
    if (err) {
      return res.status(400).json({
        error: "No Jobs Found",
      });
    }
    res.job=job
    next()
  });
};

