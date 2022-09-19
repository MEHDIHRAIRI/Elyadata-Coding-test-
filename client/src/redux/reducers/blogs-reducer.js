// eslint-disable-next-line import/no-anonymous-default-export
export default (blogs = [], action) => {
  switch (action.type) {
    case "CREATE":
      return [...blogs, action.payload];

    case "FETCH_ALL":
      return action.payload;

    case "DELETE":
      return blogs.filter((blog) => blog._id !== action.payload);

    default:
      return blogs;
  }
};
