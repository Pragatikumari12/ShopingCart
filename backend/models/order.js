const mongoose =require ('mongoose')
const { Schema } = mongoose;

const orderSchema = new Schema({
    products:{type:String,require:true},
    payment:{type:String,require:true},
    byer:{type:String,require:true},
    status:{type:String,require:true},
  
},{timestamps:true});
module.exports = mongoose.model('Order',orderSchema)