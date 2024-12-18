const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotEnv = require('dotenv')
dotEnv.config()
const offerRoutes = require('./routes/offerRoutes')
const mongourl = process.env.MONGO_URL
const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect(mongourl)
    .then(()=>console.log("connected to database"))
    .catch((err)=>console.error(err,"cannot connect to database"))
app.use('/offers',offerRoutes)
const port = process.env.PORT || 3400
app.listen(port,()=>{
    console.log("server initiated at port",port)
})