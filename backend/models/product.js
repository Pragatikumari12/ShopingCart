const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  productname:{type:String,require:true},
  productimage:{type:String,default:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Product_sample_icon_picture.png/640px-Product_sample_icon_picture.png"},
  brandname:{type:String,require:true},
  description:{type:String,require:true},
  title:{type:String,require:true},
  quantity:{type:Number,require:true},
  prize:{type:Number,require:true},
} ,{timestamps:true});
module.exports = mongoose.model('Product',productSchema)