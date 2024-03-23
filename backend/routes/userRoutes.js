const express = require ('express')
const {getalluser,myprifile,updateuserbyid,deleteuserbyid} = require('../Controller/user_controller')

const router = express.Router();
// user singup to add your details by (POST) method
// user login using POST method for authentication still pending
// (GET) user to get profile details
// update user by id
// user update our login details by (PUT) method
router.get('/getalluser',getalluser)
router.get('/myprifile/:id',myprifile)
router.put ('/:id',updateuserbyid)
router.delete("/:id",deleteuserbyid)

module.exports = router

// = & ? / %20