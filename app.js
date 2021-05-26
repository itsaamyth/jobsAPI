require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()



//My Routes
const homeRoutes = require('./routes/home')
const recruitRoutes = require('./routes/recruit')
const candidateRoutes = require('./routes/candidate')


//DB Connection
mongoose.connect(process.env.DATABASE,
    {useNewUrlParser: true, 
       useUnifiedTopology: true,
   useCreateIndex:true,useFindAndModify: false}).then(()=>{
       console.log("DB Connected")
   }).catch(()=>{
       console.log("DB Disconnected !!!")
   })



//Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//MY ROUTES
app.use('/api',homeRoutes)
app.use('/api',recruitRoutes)
app.use('/api',candidateRoutes)







//PORT
const port = process.env.PORT || 8000

app.listen(port,()=>{
    console.log(`App started on port : ${port}`)
})
