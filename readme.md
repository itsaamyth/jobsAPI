## To start the app use 'npm start app.js' or 'nodemon app.js' 

# Controllers
1. Candidate.js : It contains All required methods for a candidate such as 
Signup , 
signin , 
apply:application for a job , 
applied : it gives list of jobs a candidate has applied , 
deleteJob : this method is used to delete his application

2. Home.js : This is the home page which has all the jobs listed in the database

3. recruit.js : This file contains method for Recruiter i.e 
signup , 
signin , 
addjobs : for listing a job , 
appliedCandidates : this returns the list of candidates who has applied to his jobs ,
rejectCandidate : this method fires the route which changes the appliedCandidates job status : Rejected in the Database on both ends, 
acceptCandidate : this method fires the route which changes the appliedCandidates job status : Accepted in the Database on both ends

# Routes
1.candidate.js : it contains all the routes to access each end points of candidate in this API
    a. /candidate/signup : for signup of candidates
    b. /candidate/login : for login of candidates
    c. /candidate/apply/:jobId/:candidateId : this route is for appliying to a job and we have to pass jobId and   candidateId in the url which is present in 'jobs' and 'candidateusers' collection in the database
    d. /candidate/applied/:candidateId  : this route is for get all the jobs for which user has applied and we have to pass the :candidateId to access this list  in the url
    e. /candidate/applied/:jobId  :  with the help of this route candidate can delete its job application it only needs the :jobId for which candidate has applied

2.recruit.js : it contains all the routes to access each end points of recruiter  in this API
    a. /recruit/signup : for signup of recruiter
    b. /recruit/login  : for login of recruiter
    c. /recruit/addJobs :  for listin new jobs in the db 
    d. /recruit/appliedCandidates/:jobId : to get the list of candidate applied to recruiters job
    e. /recruit/appliedCandidates/reject/:appliedId : to reject the application of any candidate by recruiter and it takes :appliedId which is present in appliedId database
    f. /recruit/appliedCandidates/accept/:appliedId/:jobId : to accept the application of any candidate by recruiter nd it takes :appliedId which is present in appliedId database

3.home.js : this list out all the available jobs on home page

