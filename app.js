require("dotenv").config({path:"./.env"})

const express = require("express");
const app = express();

require('./models/dbconfig').dbConnection();
// on top
// const dotenv = require("dotenv");
// dotenv.config({path:"./.env"})   
const userRouter = require("./routers/userRouter")

//logger
const logger = require("morgan")
app.use(logger("tiny"))

//body pasrser
app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use('/api/user',userRouter)

// const PORT = process.env.PORT; direct
app.listen(process.env.PORT,()=>{
    console.log(`The Server is running on port ${process.env.PORT}`)
})