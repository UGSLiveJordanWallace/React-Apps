const fileUpload = require("express-fileupload");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(cors());
app.use(fileUpload());

//API endpoint for upload
app.post("/upload-media", (req, res) => {
    if (req.files === null) {
        return res.status(400).json({ errorMessage: "File failed to be loaded" })
    }

    const file = req.files.file;
    file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: err });
        }

        return res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    })
});

app.listen(3001, (req, res) => {
    console.log("Server is Running!!");
});