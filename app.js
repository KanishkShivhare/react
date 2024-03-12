require("dotenv").config({path:"./.evn"})

const express = require("express");
const app = express();

// on top
// const dotenv = require("dotenv");
// dotenv.config({path:"./.evn"})   

// const PORT = process.env.PORT; dirct 

app.listen(PORT,()=>{
    console.log(`The Server is running on port ${process.env.PORT}`)
})