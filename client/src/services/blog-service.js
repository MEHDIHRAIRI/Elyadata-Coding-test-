import axios from "axios";

const url = "http://localhost:4000/v1/blogs";

export const getAllBlogs = () => axios.get(url);
export const getBlogById = (id) => axios.get(`${url}/${id}`);
export const createBlog = (newBlog) => axios.post(url, newBlog);
