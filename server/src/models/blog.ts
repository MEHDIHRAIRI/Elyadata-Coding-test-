import mongoose from "mongoose";

export interface IBlog  {
  title: string
  content: string
  author: string
  upvotes: number
  downvotes: number
}

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