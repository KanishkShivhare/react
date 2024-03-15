const user = require("../models/userModel")

exports.home = function (req,res,next) {
    res.status(200).json({message:"hello world"})
}
exports.createuser = async function(req,res,next){
    try {
        const newuser = new user(req.body)
        await newuser.save()
        res.status(201).json({success:true,user:newuser})
    } catch (error) {
        res.status(500).json({ success: false, message: error.message})
    }
}