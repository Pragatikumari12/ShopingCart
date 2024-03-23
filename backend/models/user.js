const mongoose= require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name:{type:String,require:true},
  email:{type:String,require:true},
  password:{type:String,require:true},
  mobile:{type:String},
  address:{type:String},
  isAdmin:{type:Boolean,default:false},
  DOB:{type:String},
},
{timestamps:true});
module.exports = mongoose.model('User',userSchema)