const uploadfile = (req,res) => {
    res.json({"fileName": req.file.filename});
}

const downloadfile = (req,res) => {
    const fileName = req.params.filename;
    const path = __basedir + "/uploads/";

    res.download(path + filename, (error) => {
        if (error) {
            res.status(500).status({message:"file cannot be download" + error})
        }
    })
}

module.exports={uploadfile,downloadfile}