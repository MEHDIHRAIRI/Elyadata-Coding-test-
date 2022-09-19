import { useEffect } from "react";
import Blogs from "./pages/Blogs/Blogs";
import "antd/dist/antd.min.css";
import { useDispatch } from "react-redux";
import { getBlogs } from "./redux/actions/blogs";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogs());
    return () => {};
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Blogs />} />
        <Route path="/blogs/:id" exact element={<BlogDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
