const express = require("express");
const router = express.Router();
const upload = require("../middleware/FileUploade");
const {uploadfile,downloadfile} = require("../Controller/file_controller")

router.post('/uploadfile',upload.single("file"),uploadfile)
router.get("/file/:filename",downloadfile)

module.exports=router