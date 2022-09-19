import React from "react";
import { Card } from "antd";
import { useSelector } from "react-redux";
import LoadingCards from "./LoadingCards";
const gridStyle = {
  width: "50%",
  textAlign: "center",
};
function Cards() {
  const blogs = useSelector((state) => state.blogs);
  return !blogs.length ? (
    <LoadingCards />
  ) : (
    <Card style={{ marginTop: "7%" }}>
      {blogs.map((blog) => (
        <Card.Grid style={gridStyle}>{blog.title}</Card.Grid>
      ))}
    </Card>
  );
}

export default Cards;
