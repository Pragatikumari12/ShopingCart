const Order = require("../models/order");
// create order by POST method by user
const createorder = async (req, res) => {
    try {
        const {products,payment,byer,status} = req.body;
        if (!products) {
            return res.status(400).json({ message: "products is required" })
        }
        const order = await Order.findOne({products})
        if (products) {
            return res.send({ message: "products already avilable" })
        }
        const newproducts = await new Order({products})
        const resp = await Order.save();
        res.status(201).json({ message: "Order created successfully", resp })
    } catch (error) {
        console.log(error);
    }
}
// get all orders by GET method only for admin
const allorder = async (req, res) => {
    // use .find method 
    try {
        const category = await Order.find()
        return res.send(products)
    } catch (error) {
        console.log(error);
    }
}
// show product by productid using (GET) method
const showorder = async (req,res)=>{
    try {
        const order = await Order.find()
        res.status(200).send(order)
    } catch (error) {
        console.log(error);
        
    }
}
// update product quantity bt productid using (PUT) method
const updateorder = async (req,res)=>{
    try {
        console.log(req.params.id);
        const {products,payment,byer,status} = req.body
        console.log(req.body);
        const updatedproduct = await User.findByIdAndUpdate(req.params.id,{products:products,payment:payment,byer:byer,status:status},{new:true})
        res.status(200).send (updatedproduct)

    } catch (error) {
        console.log(error);
        
    }
}
// remove product by productid using (DELETE) method
const deleteorder= async(req,res)=>{
    try {
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "product deleted SUSSESFULLY" })
    } catch (error) {
        console.log(error);
        
    }
}
module.exports={createorder,allorder,showorder,updateorder,deleteorder}