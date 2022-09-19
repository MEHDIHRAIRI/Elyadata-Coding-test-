import React from "react";
import "./Cards.css";
import { useSelector } from "react-redux";
import LoadingCards from "./LoadingCards";
import CardComponent from "./CardComponent";

function Cards() {
  const blogs = useSelector((state) => state.blogs);
  return !blogs.length ? (
    <LoadingCards />
  ) : (
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: "9%",
        paddingBottom: "10.7%",
        backgroundColor: "#f0efeb",
      }}
    >
      <ol className="articles">
        {blogs.map((blog) => (
          <CardComponent blog={blog} />
        ))}
      </ol>
    </div>
  );
}

export default Cards;
