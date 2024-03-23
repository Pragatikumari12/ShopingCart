const express = require ('express')
const {createorder,allorder,showorder,updateorder,deleteorder} = require('../Controller/order_controller')
const router = express.Router();
// create order by POST method by user
// get all orders by GET method only for admin
// get all users order by GET method only for individual user(my order system)
// update order only for admin
// delete order for admin and user
router.post('/createorder',createorder)
router.get('/allorder',allorder)
router.get ('/showorder',showorder)
router.put ('/updateorder/:id',updateorder )
router.delete ('/deleteorder/:id',deleteorder)
module.exports = router