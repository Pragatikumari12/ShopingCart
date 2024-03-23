const User = require("../models/user");
const dotenv = require("dotenv").config()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const singup = async (req, res) => {
    try {
        // console.log(req.body);
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: "ALL FIELD ARE REQUIRED" })
        }
        // find user
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User with provided email is already registered" })
        }

        // user hash password
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashPassword });
        const resp = await newUser.save();
        res.status(201).json({ message: "USER REGISTER SUCCESSFULLY", resp })


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "ERROR ECCURED", error })

    }
}
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password required" })
        }

        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Email Not registered with Us yet" })
        }
        const match = await bcrypt.compare(password, user.password);
        const payload = {
            _id: user._id,
            name: user.name,
            email: user.email
        }

        if (match) {
            const token = await jwt.sign(payload, process.env.JWT_SECRET);
            const userdata = {
                _id: user._id,
                name: user.name,
                email: user.email,
            }
            return res.status(200).json({ message: "Logged in successfully", token, user: userdata })
        } else {
            return res.status(400).json({ message: "Email and password Incorrect.." })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error Occured.." })

    }
}
module.exports = { singup, login }
