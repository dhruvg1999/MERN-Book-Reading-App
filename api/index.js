const express = require("express")
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const booksRoute = require("./routes/books");
const CategoryRoute = require("./routes/categories");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");

dotenv.config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/images", express.static(path.join(__dirname, "/images")))

mongoose.connect(process.env.MONGO_URL)
.then(console.log("MongoDB Connected"))
.catch((err) => console.log(err));

const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, "images");
    }, filename:(req, file, cb) => {
        cb(null, req.body.name);
    }
})

const upload = multer({ storage:storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File Uploaded");
})

app.use("/api/books", booksRoute);
app.use("/api/categories", CategoryRoute);

console.log("Backend Ready");

app.listen("5000", () => {
    console.log("Backend is Running");
});