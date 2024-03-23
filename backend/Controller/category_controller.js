const categoryModal = require("../models/category");

const creatercategory = async (req, res) => {
    try {
        //1.destrature name from request.body
        // 2.check if the name filed is empty or not
        // 3.if name avilable then check name is avilable in  database or not
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ message: "name is required" })
        }
        const category = await categoryModal.findOne({ name })
        if (category) {
            return res.send({ message: "catagory already avilable" })
        }
        const newcategory = await new categoryModal({name})
        const resp = await newcategory.save();
        res.status(201).json({ message: "category created successfully", resp })


    } catch (error) {
        console.log(error);
    }
}

const getallcategory = async (req, res) => {
    // use .find method 
    try {
        const category = await categoryModal.find()
        return res.send(category)
    } catch (error) {
        console.log(error);
    }
}

const updatecategory = async (req, res) => {
    const { } = req.body
    // destrature id from params.id
    // check if the id is present in database or not
    // using .findbyidandupdate fun. update the content and category
    try {
        const {name} = req.body;
    const updatedcategory = await categoryModal.findByIdAndUpdate(req.params.id,{name},{new:true})
    res.status(200).send (updatedcategory)

    } catch (error) {

    }
}

const removecategory = async (req, res) => {
    // deletebyid
    try {
        await categoryModal.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "category deleteed SUSSESFULLY" })
    } catch (error) {
        console.log();
    }
}

module.exports = { creatercategory, getallcategory, updatecategory, removecategory }