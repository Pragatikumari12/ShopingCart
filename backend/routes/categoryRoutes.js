const express = require ('express')
const {creatercategory,getallcategory,updatecategory,removecategory}=require('../Controller/category_controller')
const {authcheck,isadmin}=require("../middleware/protectedRoutes")
const router = express.Router();

// get all cetagory
// create cetagory
// update cetagory
// delete cetagory
router.post('/creatercategory',authcheck,isadmin,creatercategory)
router.get ('/getallcategory',authcheck,isadmin,getallcategory)
router.put ('/updatecategory/:id',authcheck,isadmin,updatecategory )
router.delete ('/removecategory/:id',authcheck,isadmin,removecategory)
module.exports = router