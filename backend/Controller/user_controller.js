const User = require("../models/user");
// user login to add your details by (POST) method
// user update our login details by (PUT) method
const getalluser = async (req,res) => {
    try {
        const users = await User.find()
        return res.send(users)
    } catch (error) {
        console.log(error);   
    }
}

const myprifile = async (req,res) => {
    try {
        const user = await User.findById(req.params.id)
        return res.send(user)
    } catch (error) {
        
    }
}
const updateuserbyid = async (req, res) => {
    try {
        console.log(req.params.id);
        const { name, email, password, mobile, address, DOB } = req.body
        console.log(req.body);
        const updateid = await User.findByIdAndUpdate(req.params.id, { name: name, email: email, password: password, mobile: mobile, address: address, DOB: DOB }, { new: true })
        res.status(200).send(updateid)
    } catch (error) {
        console.log(error);
    }

}
// user delete or logout our details by (DELETE) method
const deleteuserbyid = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "USER deleteed SUSSESFULLY"})
    } catch (error) {
        console.log(error);
    }
}
module.exports = { getalluser,myprifile,updateuserbyid, deleteuserbyid }