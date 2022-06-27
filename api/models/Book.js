const mongoose = require ("mongoose");
const { Schema } = mongoose;

const BookSchema = new Schema({
        title: {
            type: String,
            required: true,
            unique: true
        },
        author: {
            type: String,
            default: "Anonymous"
        },
        photo: {
            type: String,
            default: "../images/bookcover.jpg"
        },
        link: {
            type: String,
            required: true,
            unique: true
        },
        desc: {
            type: String,
            required: true,
            unique: true
        },
        categories: { 
            type: Array,
            required: false
        }
    },
    {timestamps:true}
);

module.exports = mongoose.model("Book", BookSchema);