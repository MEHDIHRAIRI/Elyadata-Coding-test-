import * as api from "../../services/blog-service";

export const getBlogs = () => async (dispatch) => {
  try {
    const { data } = await api.getAllBlogs();
    dispatch({ type: "FETCH_ALL", payload: data.blogs });
  } catch (error) {}
};

export const createBlog = (blog) => async (dispatch) => {
  try {
    const { data } = await api.createBlog(blog);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {}
};
