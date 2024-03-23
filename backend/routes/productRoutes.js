const express = require ('express')
const {addproduct,allproducts,showproduct,updateproduct,deleteproduct}=require('../Controller/product_controller')
const router = express.Router();
// add product by (POST) method
// get all product
// get product by id
// update the product by (PUT) method
// remove the product by (DELETE) method
router.post ('/addproduct',addproduct)
router.get('/allproducts',allproducts)
router.get ('/showproduct/:id',showproduct)
router.put ('/updateproduct/:id',updateproduct )
router.delete ('/deleteproduct/:id',deleteproduct)
module.exports = router