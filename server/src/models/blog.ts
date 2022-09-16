import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    content:{
        type: String,
        required: true,
    },
    author:{
        type: String,
        required: true,
    },
    upvotes:{
        type: Number,
        required: false,
    },
    downvotes:{
        type: Number,
        required: false,
    }
})

export const Blog = mongoose.model('Blog', blogSchema)