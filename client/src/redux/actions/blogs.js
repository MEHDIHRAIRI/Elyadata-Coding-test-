import * as api from "../../services/blog-service";

export const getBlogs = () => async (dispatch) => {
  try {
    const { data } = await api.getAllBlogs();
    dispatch({ type: "FETCH_ALL", payload: data.blogs });
  } catch (error) {}
};
export const getBlog = (blogId) => async (dispatch) => {
  try {
    const { data } = await api.getBlogById(blogId);
    dispatch({ type: "FETCH", payload: data.blog });
  } catch (error) {}
};

export const createBlog = (blog) => async (dispatch) => {
  try {
    const { data } = await api.createBlog(blog);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {}
};
