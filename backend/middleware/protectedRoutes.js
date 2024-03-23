
const User = require("../models/user.js")
// authcheck is authentication part of middleware
const authcheck = async(req,res,next)=>{
next()
}
// isadmin is role permission
const isadmin = async(req,res,next)=>{
next()
}

module.exports={authcheck,isadmin};