import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getBlog } from "../../../redux/actions/blogs";
function CardComponent({ blog }) {
  const dispatch = useDispatch();
  return (
    <li key={blog._id} className="articles__article">
      <Link
        className="articles__link"
        style={
          blog.upvotes >= blog.downvotes
            ? { backgroundColor: "#588157" }
            : { backgroundColor: "#e63946" }
        }
        to={`/blogs/${blog._id}`}
        onClick={() => dispatch(getBlog(blog._id))}
      >
        <div className="articles__content articles__content--lhs">
          <h2 className="articles__title">{blog.title}</h2>
          <div className="articles__footer">
            <p>{blog.author}</p>
            <time>{blog.author}</time>
          </div>
        </div>
        <div
          className="articles__content articles__content--rhs"
          aria-hidden="true"
        >
          <h2 className="articles__title">{blog.title}</h2>
          <div className="articles__footer">
            <p>{blog.author}</p>
            <time>{blog.author}</time>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default CardComponent;
