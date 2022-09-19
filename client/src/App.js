import { useEffect } from "react";
import Cards from "./components/Cards";
import Blogs from "./pages/Blogs";
import "antd/dist/antd.min.css";
import { useDispatch } from "react-redux";
import { getBlogs } from "./redux/actions/blogs";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogs());
    return () => {};
  }, [dispatch]);

  return (
    <div className="App">
      <Blogs />
    </div>
  );
}

export default App;
