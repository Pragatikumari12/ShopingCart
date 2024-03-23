const express = require ('express')
const {singup,login} = require('../Controller/auth_controller')
const router = express.Router();
// user singup to add your details by (POST) method
// user login using POST method for authentication still pending
// (GET) user to get profile details
// update user by id
// user update our login details by (PUT) method
// delete user by id (DELETEUSER/:ID)

router.post ('/singup',singup)
router.post ('/login',login)

module.exports = router
