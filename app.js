require("dotenv").config({path:"./.env"})

const express = require("express");
const app = express();

// on top
// const dotenv = require("dotenv");
// dotenv.config({path:"./.env"})   

// const PORT = process.env.PORT; dirct

app.listen(process.env.PORT,()=>{
    console.log(`The Server is running on port ${process.env.PORT}`)
})