import React from "react";
import { Card } from "antd";

const gridStyle = {
  width: "25%",
  textAlign: "center",
};

function CardComponent({ blog, loading }) {
  return loading ? (
    <Card.Grid loading={loading} style={gridStyle} bordered={false}></Card.Grid>
  ) : (
    <Card.Grid style={gridStyle}>{blog.title}</Card.Grid>
  );
}

export default CardComponent;
