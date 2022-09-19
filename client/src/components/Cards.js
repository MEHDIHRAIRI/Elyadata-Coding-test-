import React from "react";
import "./Cards.css";
import { useSelector } from "react-redux";
import LoadingCards from "./LoadingCards";

function Cards() {
  const blogs = useSelector((state) => state.blogs);
  return !blogs.length ? (
    <LoadingCards />
  ) : (
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: "10%",
        backgroundColor: "#d8f3dc",
      }}
    >
      <ol className="articles">
        {blogs.map((blog) => (
          <li className="articles__article">
            <a className="articles__link">
              <div className="articles__content articles__content--lhs">
                <h2 className="articles__title">{blog.title}</h2>
                <div className="articles__footer">
                  <p>{blog.author}</p>
                  <time>{blog._id}</time>
                </div>
              </div>
              <div
                className="articles__content articles__content--rhs"
                aria-hidden="true"
              >
                <h2 className="articles__title">{blog.title}</h2>
                <div className="articles__footer">
                  <p>{blog.author}</p>
                  <time>{blog._id}</time>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Cards;
