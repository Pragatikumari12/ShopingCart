// add product by (POST) method
const Product = require("../models/product")
const addproduct= async (req,res) =>{
    try { 
        console.log(req.body);
        const {productname,productimage,brandname,description, title, quantity, prize} = req.body;
        if (!productname) {
             return res.status (400) .json({ message : "all field are mandatory"  })
        }
        const newproduct = new Product ({productname:productname,productimage:productimage,brandname:brandname,description:description, title:title, quantity:quantity, prize: prize});
        const resp = await newproduct.save();
        res.status(200) .json({ message: "product is save sussesfully", resp})
        
    } catch (error) {console.log(error);
        res.status(500) .json({ message: "error eccured in addproduct",error}) 
    }
}
// show all products
const allproducts=async(req,res)=>{
    try {
        const product = await Product.find()
        return res.send(product)
    } catch (error) {
        console.log(error);   
    }
}
// showcase the product by (GET) method
const showproduct = async (req,res)=>{
    try {
        const product = await Product.findById(req.params.id)
        console.log(product);
        res.status(200).send(product)
        
    } catch (error) {
        console.log(error);
        
    }
}
// update the product bt (PUT) method
const updateproduct = async (req,res)=>{
    try {
        const {productname,productimage,brandname,description, title, quantity, prize} = req.body
    console.log(req.body);
    const updatedproduct = await Product.findByIdAndUpdate(req.params.id,{productname:productname,productimage:productimage,brandname:brandname,description:description, title:title, quantity: quantity, prize: prize},{new:true})
    res.status(200).send (updatedproduct)
       
    } catch (error) {
        console.log(error);   
    }
}
// remove the product bt (DELETE) method
const deleteproduct= async (req,res)=>{
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "product deleteed SUSSESFULLY"})     
    } catch (error) {
        console.log(error);   
    }
}
module.exports={addproduct,allproducts,showproduct,updateproduct,deleteproduct}
