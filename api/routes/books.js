const router = require("express").Router();
const Book = require("../models/Book");


//ADD BOOK
router.post("/", async (req, res) => {
    try{
        const newBook = new Book(req.body);
        const book = await newBook.save();
        res.status(200).json(book);
    }
    catch(err){
        res.json(err.toString());
    }
});


//EDIT BOOK
router.put("/:id", async (req, res) => {
    try{
        const book = await Book.findById(req.params.id);
        try{
            const updatedBook = await Book.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                { new: true }
            );
            res.status(200).json(updatedBook);
        }
        catch(err){
            res.json(err.toString());
        }
    }
    catch(err){
        res.json(err.toString());
    }
});


//DELETE BOOK
router.delete("/:id", async (req, res) => {
    try{
        const book = await Book.findById(req.params.id);
        try{
            await book.delete();
            res.status(200).json("Book is Deleted");
        }
        catch(err){
            res.json(err.toString());
        }
    }
    catch(err){
        res.json(err.toString());
    }
});


//GET BOOK
router.get("/:id", async (req, res) => {
    try{
        const book = await Book.findById(req.params.id);
        res.status(200).json(book);
    }
    catch(err){
        res.json(err.toString());
    }
});


//GET ALL BOOKS
router.get("/", async (req, res) => {
    const catName = req.query.cat;
    try{
        let books;
        if(catName){
                books = await Book.find({categories: {
                    $in: [catName]
                },
            });
        }
        else{
            books = await Book.find();
        }
        res.status(200).json(books);
    }
    catch(err){
        res.json(err.toString());
    }
});


module.exports = router